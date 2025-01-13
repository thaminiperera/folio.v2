import React, { useEffect } from "react";
import Namebar from "../components/Namebar";
import Footer from "../components/Footer";

import { workitems } from "../workitems";

const Ecomm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 2;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="src\assets\ecomm\ecomm_cover.jpg"
          alt="Ecomm Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/footgear"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh mb-[20px] md:mb-[50px] fade-in">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="block italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            {workitems[index].title}
          </div>
          <div className="text-justify mt-2 raleway block">
            This project is an e-commerce platform built using React and
            Material-UI for the frontend. The application includes core
            functionalities like product browsing, search and filtering, cart
            management, and user login and registration. With a focus on clean
            code, modularity, and user experience, this project is designed to
            be both scalable and adaptable.
          </div>
          <div className="flex gap-5 block">
            <a target="_blank" href="https://github.com/thaminiperera/ecomm">
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Github Link{" "}
                {
                  <img
                    className="w-[10px] h-[10px]"
                    src="src\assets\up-right-arrow.png"
                  />
                }
              </div>{" "}
            </a>

            {/* <a target="_blank" href="https://tdp-interpreter.netlify.app/">
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Demo{" "}
                {
                  <img
                    className="w-[10px] h-[10px]"
                    src="src\assets\up-right-arrow.png"
                  />
                }
              </div>
            </a> */}
          </div>
          <div className="flex gap-2 my-2 raleway-bold block">
            Technologies :{" "}
            {workitems[index].tags.map((tag) => (
              <div
                key={tag}
                className=" rounded-lg raleway-bold text-[12px] px-2 py-1 text-[var(--red)] border border-[var(--red)]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              High-Level Design and Key Components
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px] items-center">
            <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[100%] h-[300px]"
                src="src\assets\ecomm\mockup_lap.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              The application offers a seamless shopping experience with
              features like product browsing, allowing users to search and
              filter items by criteria such as price and category. Users can
              easily manage their cart, modify quantities, and proceed to
              checkout. It supports user authentication, enabling sign-in,
              registration, and persistent sessions across page reloads using
              the UserContext. The responsive design ensures an optimal
              experience across mobile, tablet, and desktop devices, while toast
              notifications provide interactive feedback for success or error
              messages via react-toastify.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Coding Choices & Decisions
          </div>

          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Component-based Structure:</b> Each major feature of the
                application is split into its own component, such as
                ProductCard, CartProductCard, and QuantityMeter. This modular
                approach allows for better reusability, easier testing, and more
                maintainable code.
              </li>
              <li className="">
                <b>Material-UI for Styling:</b> Material-UI components (like
                Grid2, Box, Typography, etc.) are used extensively to ensure a
                responsive and visually appealing design. These components come
                with built-in accessibility features and are highly customizable
                to meet the application’s needs.
              </li>
              <li className=" ">
                <b>React Context API for State Management:</b> The UserContext
                is implemented to store and manage the user’s authentication
                state across the application. The useUser custom hook provides
                access to the context and allows components to update user data,
                like login status and cart contents.
              </li>
              <li className=" ">
                <b>Formik and Yup for Form Management:</b> The login and
                registration forms use Formik for state management and Yup for
                schema-based validation. This setup reduces boilerplate code,
                handles form validation efficiently, and provides a clean,
                user-friendly experience with real-time error feedback.
              </li>
              <li className=" ">
                <b>Dynamic Routing with React Router:</b> React Router
                (BrowserRouter, Routes, and Route) is used to handle routing
                between pages. Redirects and catch-all routes ensure that users
                are correctly routed to pages such as login, register,
                dashboard, and the error page if an invalid URL is entered.
              </li>
              <li className=" ">
                <b>Toast Notifications with react-toastify:</b> react-toastify
                is used to display non-intrusive notifications for actions such
                as login success, registration failure, or cart updates.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Component Breakdown
            </h1>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            App Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            The root component that sets up routing, context providers, and
            global notifications.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Routing:</b> Manages the main routes (/login, /register,
                /dashboard, /cart) and redirects the root path (/) to the login
                page temporarily.
              </li>
              <li className="">
                <b>User Context:</b> Wraps the app with UserProvider to provide
                user authentication state across the app.
              </li>
              <li className="">
                <b>Notifications:</b> Displays toast notifications for user
                interactions.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Dashboard Page
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px] items-center">
            <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[100%] h-[250px] border border-[var(--gold)]"
                src="src\assets\ecomm\dash.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              Displays a list of products and allows users to search, filter,
              and view product details.
            </div>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Search:</b> Allows users to search products by title.
                temporarily.
              </li>
              <li className="">
                <b>Filter:</b> Filters products by price range and category.
              </li>
              <li className="">
                <b>Product Cards:</b> Each product is displayed in a ProductCard
                component.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Cart Page
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px] items-center">
            <div className="w-[100%] md:w-[50%] text-justify block">
              Shows the user's shopping cart, including the items they’ve added,
              their prices, and the total cost.
            </div>
            <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[100%] h-[250px] border border-[var(--gold)]"
                src="src\assets\ecomm\cart.png"
              />
            </div>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>CartProductCard:</b> Displays each item in the cart,
                including its price and quantity.
              </li>
              <li className="">
                <b>Total Calculation:</b> Dynamically calculates and displays
                the total price, including any additional charges.
              </li>
              <li className="">
                <b>Navigation:</b> Provides an option to proceed to checkout.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Login Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Handles user login, validating credentials and managing session
            state.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Form Validation:</b> Ensures valid email format and secure
                password handling with Formik and Yup.
              </li>
              <li className="">
                <b>Authentication:</b> Checks if the user exists and their
                credentials are correct.
              </li>
              <li className="">
                <b>Navigation:</b> On successful login, redirects the user to
                the dashboard.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Register Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Allows new users to create an account.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Form Validation:</b> Ensures required fields and password
                security.
              </li>
              <li className="">
                <b>Duplicate Checking:</b> Prevents duplicate email registration
                by checking against existing users.
              </li>
              <li className="">
                <b>Navigation:</b> After successful registration, redirects the
                user to the dashboard.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Cart-Product-Card Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Displays individual products in the cart, allowing users to update
            quantities or remove items.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Quantity Control:</b> Integrated with the QuantityMeter
                component to adjust product quantity.
              </li>
              <li className="">
                <b>Remove Product:</b> A button to remove the product from the
                cart.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Product-Card Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Displays product details such as the title, description, and price,
            and includes an option to add the product to the cart.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Add to Cart:</b> A button that allows users to add the
                product to their cart.
              </li>
              <li className="">
                <b>Quantity Adjustment:</b> After adding to the cart, users can
                modify the product quantity.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Quantity-Meter Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            Allows users to adjust the quantity of a product in the cart.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Increment/Decrement:</b> Buttons to increase or decrease the
                product quantity.
              </li>
              <li className="">
                <b>State Management:</b> Updates the cart context whenever the
                quantity changes.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Top-Bar Component
          </div>
          <div className="block raleway text-justify mt-[20px]">
            A navigation bar that provides key navigation features like going to
            the dashboard, viewing the cart, and logging out.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Dynamic Display:</b> Shows the user’s first name if logged
                in.
              </li>
              <li className="">
                <b>Cart Icon:</b> Displays a shopping cart icon for quick access
                to the cart.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            User Context
          </div>
          <div className="block raleway text-justify mt-[20px]">
            The UserContext manages user authentication and persists user data
            (such as cart contents and login status) across page reloads using
            localStorage.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Key Features:
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Persistence:</b> Saves user data to localStorage to ensure
                that the user’s session persists even after a page reload.
              </li>
              <li className="">
                <b>State Management:</b> Centralizes the management of user data
                and authentication state in one place, making it easily
                accessible and updateable across the app.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Assests :
            </h1>
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Logo :</b>{" "}
                <a
                  target="_blank"
                  href="https://www.svgrepo.com/"
                  className="underline"
                >
                  https://www.svgrepo.com/
                </a>
              </li>
              <li className="">
                <b>Product List :</b>{" "}
                <a
                  target="_blank"
                  href="https://gist.github.com/nefejames/bbeda8f257d7fa94b3e863926e730875"
                  className="underline"
                >
                  https://gist.github.com/nefejames/bbeda8f257d7fa94b3e863926e730875
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Potential Improvements :
            </h1>
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Session Management Implement session expiration mechanisms for
                security.
              </li>
              <li className="">
                Loading States Show loading indicators or spinners during logout
                or data-fetching processes to improve user experience.
              </li>
              <li className="">
                Cart Item Count Display the number of items in the cart next to
                the cart icon for quick user reference.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ecomm;
