import { Card, CardBody } from '@nextui-org/react';

interface CardListProps {
     children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
     return (
          <Card>
               <CardBody>{children}</CardBody>
          </Card>
     );
};

export default CardList;