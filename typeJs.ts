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

export interface OrderDetail {
  id: number;
  order_id: number;
  product_id: number;
  shop_product_id: number;
  name: string;
  order_type: string;
  quantity: number;
  price: number;
  amount: string;
  order_status: string;
  shipping_status: string | null;
  created_at: string;
  updated_at: string | null;
  profit: number | null;
  product_varian: string | null;
  varian_text: string | null;
  images: string[] | null;
  shipping_method: string;
  shipping_option: string;
  shipping_etd: string;
  shipping_resi: string;
  shipping_price: number;
  sku: string | null;
  product: Product;
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
  payment_reference: string | null;
  payment_fee: number;
  amount: number;
  payment_image: string | null;
  notif: number;
  snap_token: string | null;
  payment_status: string;
  payment_type: string | null;
  fraud_status: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
  expired_time: string;
  pay_code: string | null;
  order_items: {
    sku: string | null;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
    product_url: string | null;
    image_url: string;
  }[];
  instructions: {
    title: string;
    steps: string[];
  }[];
  payment_response: {
    success: boolean;
    message: string;
    data: {
      reference: string;
      merchant_ref: string;
      payment_selection_type: string;
      payment_method: string;
      payment_name: string;
      customer_name: string;
      customer_email: string;
      customer_phone: string;
      callback_url: string | null;
      return_url: string;
      amount: number;
      fee_merchant: number;
      fee_customer: number;
      total_fee: number;
      amount_received: number;
      pay_code: string | null;
      pay_url: string;
      checkout_url: string;
      status: string;
      expired_time: string;
      order_items: {
        sku: string | null;
        name: string;
        price: number;
        quantity: number;
        subtotal: number;
        product_url: string | null;
        image_url: string;
      }[];
      instructions: {
        title: string;
        steps: string[];
      }[];
    };
  };
  merchant_ref: string;
  checkout_url: string;
  payment: {
    id: number;
    tripay_code: string;
    payment_name: string;
    picture: string;
    type: string;
    created_at: string;
    updated_at: string | null;
  };
}

export interface OrderHistory {
  id: number;
  order_id: number;
  order_type: string | null;
  amount: string;
  order_status: string;
  shipping_status: string | null;
  created_at: string;
  updated_at: string | null;
  note: string;
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
  order_detail: OrderDetail[];
  order_payment: OrderPayment;
  order_history: OrderHistory[];
}
