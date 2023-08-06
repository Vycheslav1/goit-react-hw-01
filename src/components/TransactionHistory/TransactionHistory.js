
import PropTypes from "prop-types";

import{Container,Title,Table,THead,Tr,Th,TBody,Td} from './TransactionHistoryStyles';

const TransactionHistory = ({title,items }) => (
   
    <Container>
        <Title>{title}</Title>
    <Table>
        <THead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </THead>
  <TBody>

        {items.map(item => (
          <Tr key={item.id}>
          <Td>{item.type}</Td>
          <Td>{item.amount}</Td>
          <Td>{item.currency}</Td>
        </Tr>
        ))}
   </TBody>
      </Table>
    </Container>
        );

  TransactionHistory.propTypes = {

    title:PropTypes.string.isRequired,
   items: PropTypes.arrayOf(PropTypes.shape({
  id:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired
  }))
  };

  export {TransactionHistory}