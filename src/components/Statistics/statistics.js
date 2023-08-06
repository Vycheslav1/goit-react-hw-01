
import PropTypes from "prop-types";

import {Statistic,Title,Stat,Li,Label,Percentage} from './StatisticsStyles';


const Statistics=({title,stats})=>(

<Statistic>
  <Title>{title}</Title>

  <Stat>
  {stats.map(stat => (
        <Li key={stat.id}><Label>{stat.label}</Label>
        <Percentage>{stat.percentage}</Percentage></Li>
      ))}
      </Stat>
</Statistic>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired
    })),
  };

  
  export {Statistics} 