import React from 'react';

export const IssueList = (props) => {
  const imageList = () => {
    let filteredList = props.Issues.slice();
    if (props.ActiveFilters.length > 0) {
      filteredList = filteredList.filter((issue) => {
        let indexOf = props.ActiveFilters.indexOf(issue.publisher);
        return indexOf > -1;
      });
    }

    return filteredList.map((issue) => {
      return (
        <div
          className={`col ${props.Size} issue`}
          key={issue.id}
          data-key={issue.id}
          onClick={(e) => props.OnIssueClick(issue, filteredList)}
        >
          <img src={issue.imageUrl} alt={issue.title} title={issue.title} />
        </div>
      );
    });
  };

  return <div className="row issue-list">{imageList()}</div>;
};

export default IssueList;
