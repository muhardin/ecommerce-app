export interface ProductShops {
  id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}

export interface Products {
  id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
  number: number;
  weight: number;
  supplier_id: number;
  supplier_area: number;
  shipping: string;
  agent_price: number;
  profit: number;
  product: Products;
}
export interface Shops {
  id: number;
  shop: Shops;
}
export interface Address {
  id: number;
  user_id: number;
  subdistrict: string;
  name: string;
  address_name: string;
  address: string;
  description: string;
  contact_person: string;
  city_name: string;
  image: string;
  subdistrict_name: string;
  zip_code: string;
  phone: string;
}

export interface ItemProps {
  item: Products;
}

export interface StateProps {
  notes: string;
  shopping: {
    status: boolean;
    productData: [];
    userInfo: {};
    orderData: {
      order: Products[];
    };
  };
}

export interface FilteredUser {
  id: string;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  status: string;
  data: {
    user: FilteredUser;
  };
}

export interface UserLoginResponse {
  status: string;
  token: string;
}
export interface Component {
  status: boolean;
}

export interface DataToAdd {
  name: string;
  address_name: string;
  contact_person: string;
  description: string;
  phone: string;
  subdistrict: string;
  address: string;
  zip_code: string;
}
export interface ResponseData {
  id: number;
  name: string;
  address_name: string;
  description: string;
}

export interface City {
  city_id?: string;
  value?: string;
}

export interface SelectOption {
  id: number;
  label: string;
  value: string;
}
export interface CourierData {
  rajaongkir: {
    results: {
      costs: string[]; // Define the structure of costs here
    };
  };
  results: string[];
  costs: string[];
  code: string;
}

export interface Product {
  id: number;
  title: string;
  isNew: number;
  oldPrice: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
  is_trending: number;
  sub_category: number;
  supplier_id: number;
  supplier_area: number;
  weight: number;
  product_url: string | null;
  sku: string | null;
}

export interface Order {
  id: number;
  shop_id: number;
  user_id: number;
  reseller_id: number;
  address_id: number;
  quantity: number;
  amount: string;
  profit: number | null;
  order_status: string;
  payment_method: string;
  payment_option: string;
  payment_reference: string | null;
  invoice_number: string;
  created_at: string;
  updated_at: string;
  shipping_method: string | null;
  shipping_package: string | null;
  shipping_price: string;
  shipping_status: string | null;
  payment_image: string | null;
  notif: number;
  snap_token: string | null;
  payment_status: string;
  payment_type: string | null;
  fraud_status: string | null;
  status: string | null;
  order_payment: OrderPayment;
  user: User;
  order: Order;
}

export interface Payment {
  id: number;
  tripay_code: string;
  code: string;
  payment_name: string;
  picture: string;
  type: string;
  created_at: string;
  updated_at: string | null;
}

export interface OrderPayment {
  id: number;
  order_id: number;
  user_id: number;
  reseller_id: number;
  shop_id: number;
  invoice_number: string;
  payment_method: string;
  payment_name: string;
  payment_code: string;
  payment_option: string | null;
  payment_reference: string;
  payment_fee: number;
  amount: number;
  payment_image: string | null;
  notif: number;
  snap_token: string | null;
  payment_status: string;
  payment_type: string | null;
  fraud_status: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  expired_time: string;
  pay_code: string;
  order_items: string; // Consider parsing this as an array of objects
  instructions: string; // Consider parsing this as an array of objects
  payment_response: PaymentResponse;
  merchant_ref: string;
  checkout_url: string | null;
  payment: Payment;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  shop_product_id: number;
  name: string;
  order_type: string;
  quantity: number;
  price: number;
  amount: number;
  order_status: string;
  shipping_status: string | null;
  created_at: string;
  updated_at: string;
  profit: number;
  product_varian: string | null;
  varian_text: string | null;
  images: string | null;
  shipping_method: string;
  shipping_option: string;
  shipping_price: number;
  shipping_etd: string;
  sku: string | null;
  user_address_id: string | null;
  shipping_resi?: string | null;
  product: Product;
  order: Order;
  item: OrderItem;
  user_address: UserAddress;
}
export interface User {
  id: number;
  username: string | null;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  email_verified_at: string | null;
  password_text: string | null;
  created_at: string;
  updated_at: string;
  photo: string;
  country: string | null;
  photo_url: string;
  role: string;
  is_supplier: number;
  is_seller: number;
  is_company: number;
}
export interface UserAddress {
  id: number;
  user_id: number;
  address_name: string | null;
  order_id: number;
  user_addresses: string | null;
  shipping_package: string | null;
  email: string;
  phone: string;
  title: string;
  province: string;
  province_name: string;
  city: string;
  city_name: string;
  subdistrict: string;
  subdistrict_name: string;
  address: string;
  zip_code: string;
  contact_person: string;
  is_main_address: string | null;
  created_at: string;
  updated_at: string;
}
// types.ts

export interface AppState {
  modal: boolean;
  // other state properties
}
