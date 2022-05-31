import {coins} from '../data/coins';

// indexing with an arbitrary type is using number to get the type of an array’s elements
export type CoinCardProps = typeof coins[number];
