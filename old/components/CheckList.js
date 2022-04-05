import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { commonFont } from '../config/commonProps';

export default function CheckList({ children }) {
  return (
    <List spacing={3} {...commonFont} textAlign="left">
      {children &&
        children.map((child, index) => {
          return (
            <ListItem key={index}>
              <ListIcon
                as={FaCheck}
                color={index === 0 ? 'green.500' : 'gray.200'}
              />
              {child}
            </ListItem>
          );
        })}
    </List>
  );
}
