import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
  TabNavigation: undefined;
  CryptoDetailsScreen: {
    coinId: string;
  };
};

export type TabStackParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  ConvertCyrpto: undefined;
  Setting: undefined;
  Portfolio: undefined;
};

export type DialogProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  // id: string;
};

export type CryptoDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'CryptoDetailsScreen'
>;

export interface CoinType {
  name: string;
  symbol: string;
  description: string;
  image: {
    small: string;
  };
  coingecko_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    price_change_percentage_24h: number;
    total_supply: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_1y: number;
  };
}
