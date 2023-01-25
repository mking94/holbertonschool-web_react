import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;
  const bgColor1 = { backgroundColor: '#f5f5f5ab' };
  const bgColor2 = { backgroundColor: '#deb5b545' };

  if (isHeader === true) {
	bgColor = bgColor2;
    if (textSecondCell === null) {
      tr = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
	bgColor = bgColor1;
    tr = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={bgColor}>{content}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
