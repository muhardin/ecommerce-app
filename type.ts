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
