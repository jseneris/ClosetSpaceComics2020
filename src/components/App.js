import React, { Component } from 'react';
import axios from '../api/ClosetSpaceComicsApi';
import { HeaderSection } from './HeaderSection';
import { CatalogSection } from './CatalogSection';
import { CollectionSection } from './CollectionSection';
import { PurchaseSection } from './PurchasesSection';
import { AboutUsSection } from './AboutUsSection';
import { FooterSection } from './FooterSection';

class App extends Component {
  state = {
    filters: [],
    issues: [],
    locations: [],
    purchases: {
      totalPages: 0,
      purchases: [],
    },
  };

  componentDidMount() {
    this.handleSearchByDate('05/20/2020');
    this.getCollections(0);
    this.getPurchases(0, 1);
  }

  handleDateChange = (searchDate) => {
    this.handleSearchByDate(searchDate);
  };

  handleSearchByDate = async (searchDate) => {
    const response = await axios.get('/catalog/issues', {
      params: { date: searchDate },
    });

    let issueList = [];
    let filterList = [];

    if (response.data.Issues) {
      issueList = response.data.Issues.map((issue) => {
        return {
          id: issue.Id,
          imageUrl: issue.ImageUrl,
          title: issue.Title,
          issueNum: issue.IssueNum,
          publisher: issue.Publisher,
          description: issue.Description,
          coverPrice: issue.CoverPrice,
        };
      });
    }
    if (response.data.Filters) {
      filterList = response.data.Filters.map((filter) => {
        return {
          publisher: filter.Name,
          imageUrl: filter.ImageUrl,
        };
      });
    }

    this.setState({ filters: filterList, issues: issueList });
  };

  getCollections = async (userId) => {
    const response = await axios.get('/user/collection', {
      headers: {
        userId: userId,
      },
    });

    let locationList = [];

    if (response.data.Locations) {
      locationList = response.data.Locations.map((location) => {
        return {
          id: location.Id,
          name: location.Name,
          imageUrl: location.ImageUrl,
          boxes: location.Boxes.map((box) => {
            return {
              id: box.Id,
              name: box.Name,
              imageUrl: box.ImageUrl,
            };
          }),
        };
      });
      this.setState({ locations: locationList });
    }
  };

  getPurchases = async (userId, page) => {
    const response = await axios.get('/user/purchases', {
      params: {
        page: page,
      },
      headers: {
        userId: userId,
      },
    });

    let purchaseList = {
      totalPages: 0,
      purchases: [],
    };

    purchaseList.totalPages = response.data.TotalPages;
    purchaseList.purchases = response.data.Purchases.map((purchase) => {
      return {
        id: purchase.Id,
        description: purchase.Description,
        purchaseDate: purchase.PurchaseDate,
        price: purchase.Price,
        size: purchase.Size,
        imageUrl: purchase.ImageUrl,
      };
    });
    this.setState({ purchases: purchaseList });
  };

  render() {
    return (
      <div className="App">
        <HeaderSection></HeaderSection>
        <a className="no-show" id="section-catalog" href="#section-catalog">
          &nbsp;
        </a>
        <CatalogSection
          Filters={this.state.filters}
          Issues={this.state.issues}
          HandleDateChange={this.handleDateChange}
        />
        <a
          className="no-show"
          id="section-collection"
          href="#section-collection"
        >
          &nbsp;
        </a>
        <CollectionSection Locations={this.state.locations}></CollectionSection>
        <a className="no-show" id="section-purchases" href="#section-purchases">
          &nbsp;
        </a>
        <PurchaseSection Purchases={this.state.purchases}></PurchaseSection>
        <a className="no-show" id="section-about-us" href="#section-about-us">
          &nbsp;
        </a>
        <div className="about-header">Stuff To Do</div>

        <AboutUsSection></AboutUsSection>
        <FooterSection></FooterSection>
      </div>
    );
  }
}

export default App;