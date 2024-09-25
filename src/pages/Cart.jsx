import React from "react";

function Cart() {
  // Mock user data, replace with actual data fetching logic
  const user = {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
  };

  // Mock cart items data, replace with actual cart items fetching logic
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  // Function to handle item deletion
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Function to handle deleting all items
  const handleDeleteAllItems = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 dark:bg-zinc-900">
      <div className="flex items-center justify-center gap-4">
        <img src={user.image} alt="user" className="h-12 w-12 rounded-full" />
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          {user.name}&apos;s Shopping Cart
        </h1>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg dark:bg-zinc-700">
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-gray-200 p-5 dark:border-zinc-600">
              <h2 className="text-2xl font-semibold dark:text-white">
                Your Items
              </h2>
              <button
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                onClick={handleDeleteAllItems}
              >
                Delete All Items
              </button>
            </div>
            <div className="p-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b border-gray-200 p-2 dark:border-zinc-600"
                  >
                    <span className="text-gray-800 dark:text-white">
                      {item.name} - ${item.price}
                    </span>
                    <button
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-zinc-400">
                  Your cart is empty.
                </p>
              )}
            </div>
            <div className="flex justify-between border-t border-gray-200 p-5 dark:border-zinc-600">
              <span className="text-xl font-semibold dark:text-white">
                Total:
              </span>
              <span className="text-xl font-semibold dark:text-white">
                ${cartItems.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <div className="flex border-t border-gray-200 p-5 dark:border-zinc-600">
              <button className="ml-auto rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
