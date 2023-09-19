import { productData } from "./../../constants/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Product fetched successfully",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      {
        status: 500,
      }
    );
  }
};
