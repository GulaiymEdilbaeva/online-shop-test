import { useDispatch, useSelector } from "react-redux";
import { AdminCard } from "../../layout/Admin/adminCard/AdminCard";
import { useEffect } from "react";
import { getProductsByCategory } from "../../redux/slices/adminSlice";
import { CircularProgress } from "@mui/material";

export const MalePage = () => {
  const { products, isLoading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory("MALE"));
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {products.map((product) => (
        <AdminCard
          key={product.id}
          product={product}
          onDelete={() => {}}
          onEdit={() => {}}
          getById={() => {}}
        />
      ))}
    </>
  );
};
