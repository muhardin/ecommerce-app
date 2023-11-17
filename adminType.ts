// Product type definition
export interface Product {
  id: number;
  title: string;
  isNew: string;
  oldPrice: string | null;
  price: number;
  company_price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: number | null;
  quantity: number;
  is_trending: number;
  sub_category: number;
  supplier_id: number;
  supplier_area: number;
  weight: number;
  product_url: string | null;
  sku: string;
  created_at: string;
  updated_at: string;
  slug: string | null;
  isPublish: number;
  status: string;
  supplier: Supplier;
  product_gallery: ProductGallery[];
}

// UserAddress type definition
export interface UserAddress {
  id: number;
  user_id: number;
  address_name: string;
  order_id: number;
  user_addresses: any; // Add proper type here
  shipping_package: any; // Add proper type here
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
  is_main_address: any; // Add proper type here
  created_at: string;
  updated_at: string;
}

// OrderDetail type definition
export interface OrderDetail {
  id: number;
  order_id: number;
  product_id: number;
  shop_product_id: number;
  name: string;
  order_type: string;
  quantity: number;
  supplier_price: number;
  price: number;
  shipping_price: number;
  supplier_paid: number;
  amount: number;
  shipping_resi: string | null;
  order_status: string;
  shipping_status: any; // Add proper type here
  created_at: string;
  updated_at: string;
  profit: number;
  supplier_profit: number;
  referral_profit: number;
  company_profit: number;
  product_varian: any; // Add proper type here
  varian_text: any; // Add proper type here
  images: any; // Add proper type here
  shipping_method: string;
  shipping_option: string;
  shipping_etd: string;
  sku: string | null;
  user_address_id: number;
  payment_status: string;
  shipping_proof: string | null;
  product: Product;
  user_address: UserAddress;
}

// OrderPayment type definition
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
  payment_option: any; // Add proper type here
  payment_reference: string | null;
  payment_fee: number;
  amount: number;
  payment_image: string | null;
  notif: number;
  snap_token: string | null;
  payment_status: string;
  payment_type: any; // Add proper type here
  fraud_status: any; // Add proper type here
  status: string;
  created_at: string;
  updated_at: string;
  expired_time: string;
  pay_code: string;
  order_items: string; // Change to array of OrderItems
  instructions: string; // Change to array of Instruction
  payment_response: string;
  merchant_ref: string;
  checkout_url: string | null;
  payment: any; // Add proper type here
}

// OrderItem type definition
export interface OrderItem {
  sku: string | null;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  product_url: string | null;
  image_url: string;
}

// Instruction type definition
export interface Instruction {
  title: string;
  steps: string[];
}

// Main Order type definition
export interface Order {
  id: number;
  shop_id: number;
  user_id: number;
  reseller_id: number;
  address_id: number;
  quantity: number;
  amount: string;
  profit: any; // Add proper type here
  order_status: string;
  payment_method: string;
  payment_option: string;
  payment_reference: string | null;
  invoice_number: string;
  created_at: string;
  updated_at: string;
  shipping_method: any; // Add proper type here
  shipping_package: any; // Add proper type here
  shipping_price: string;
  shipping_status: any; // Add proper type here
  payment_image: string | null;
  notif: number;
  snap_token: string | null;
  payment_status: string;
  payment_type: any; // Add proper type here
  fraud_status: any; // Add proper type here
  status: any; // Add proper type here
  order_detail: OrderDetail[];
  order_payment: OrderPayment;
}
// ProductCategory type definition
export interface ProductCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string | null;
  picture: string;
  status: number;
}

// User type definition
export interface User {
  id: number;
  username: string | null;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  email_verified_at: string | null;
  password_text: string;
  created_at: string;
  updated_at: string;
  photo: string;
  country: string;
  photo_url: string;
  role: string;
  is_supplier: number;
  is_seller: number;
  is_company: number;
  referral_id: number | null;
}

// Supplier type definition
export interface Supplier {
  id: number;
  user_id: number;
  supplier_id: string;
  supplier_name: string;
  city_id: number;
  city_name: string;
  contact_person: string;
  phone: string;
  description: string;
  subdistrict: number;
  subdistrict_name: string;
  province_id: number | null;
  province_name: string | null;
  created_at: string;
  updated_at: string;
  address: string;
  zip_code: string;
  user: User;
}

// ProductGallery type definition
export interface ProductGallery {
  id: number;
  product_id: number;
  galleries: string;
  url: string;
  full_url: string;
  thumbnail: string | null;
  created_at: string;
  updated_at: string;
}
