import React from "react";

const BestSelling = () => {
  return (
    <>
      <div>
        <p className="text-4xl font-semibold">Our most selling foods this month -</p>
      </div>
      <div className="md:flex items-center justify-center space-x-5">
        <div>
          <p className="bold text-2xl">Honey Mustard</p>
          <p className="text-lg ">
            Honey Mustard Chicken is a popular dish made by marinating chicken
            in a mixture of honey, mustard, and spices before grilling or baking
            it. The result is a sweet and tangy flavor that pairs well with{" "}
            potatoes. It's not surprising that Honey Mustard Chicken is the most
            selling product on your website this month, as it is a versatile and
            delicious meal that is easy to prepare and enjoyed by many people.
          </p>
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            className=" rounded-xl "
            src="https://images.unsplash.com/photo-1543340904-991f3751a30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="md:flex items-center space-x-5">
        <div>
          <img
            style={{ width: "100%" }}
            className=" rounded-xl "
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div>
          <p className="bold text-2xl">Napoletana Pizza</p>
          <p className="text-lg ">
            Napoletana Pizza, also known as Neapolitan Pizza, is a traditional
            Italian pizza that originated in Naples, Italy. It is made using
            simple, high-quality ingredients and cooked in a wood-fired oven,
            resulting in a crispy yet chewy crust and delicious toppings. The
            classic Napoletana Pizza consists of a thin crust made with
            high-gluten flour, water, salt, and yeast, topped with San Marzano
            tomatoes, mozzarella cheese, fresh basil, and a drizzle of olive
            oil.
          </p>
        </div>
      </div>
      <hr />
      <div className="md:flex items-center space-x-5">
        <div>
          <p className="bold text-2xl">Penne pasta</p>
          <p className="text-lg ">
            Penne pasta is a type of pasta that is shaped like small tubes with
            diagonal cuts at the ends. It originated in Italy and is a popular
            choice for a variety of dishes due to its versatility and ability to
            hold sauces well. Penne pasta is made from durum wheat semolina and
            water, giving it a firm and chewy texture that pairs well with a
            variety of sauces and toppings. It can be cooked to a variety of
            levels of doneness.
          </p>
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            className=" rounded-xl "
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1683035563~exp=1683036163~hmac=d07248fb8f0d1a4f2210ee2525edd2d2ccbafba4d70c9a525faa305391c18c54"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BestSelling;
