import {
 useQuery,
 useMutation,
 useQueryClient,
 QueryClient,
 QueryClientProvider,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';


const useCart = () => {
 const {userStatus} = useContext(AuthContext);
 const axiosSecure = useAxiosSecure();
 const {refetch, data: cart=[]} = useQuery({
  queryKey: ['cart', userStatus?.email],
  queryFn: async () => {
   const res = await axiosSecure.get(`/carts?email=${userStatus.email}`)
   return res.data;
  }
 })
 return [cart, refetch];
};

export default useCart;