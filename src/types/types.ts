// id, symbol,name,image,current_price,price_change_percentage_24h,total_volume
export type CoinCardProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  CryptoDetailsScreen: undefined;
};

export type DialogProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
};
