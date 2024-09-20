# **Sunnee Beachwear Management System**

## Overview

The Sunnee Beachwear Management System is a **TypeScript-based** project designed to model the operational structure of the sustainable beachwear brand, **Sunnee**. The system simulates interactions between customers and beachwear products, while also representing the brand's sustainable production process, which utilizes recycled plastic (from fishing nets) to create eco-friendly swimwear.

## Features

- **Customer-Product Interactions**: Customers can order products and receive confirmations based on product availability.
- **Product Management**: The system tracks each product's type, size, color, and availability status.
- **Sustainable Production Simulation**: Models the process of converting fishing nets into plastic pellets, which are then used to produce swimwear.
- **Production Process Tracking**: Products are added to various stages of the production process.

## Project Structure

### Interfaces

1. **IProduct**: Defines the properties and behaviors of a product.
2. **ICustomer**: Defines customer properties and their ability to order products.
3. **IProductionProcess**: Represents the production process, including the ability to add products and explain the process.

### Classes

1. **Product**: Implements the `IProduct` interface, allowing product creation and customer assignment.
2. **Customer**: Implements the `ICustomer` interface, enabling customers to order products.
3. **ProductionProcess**: Implements the `IProductionProcess` interface, simulating the conversion of fishing nets into fabrics and tracking the products involved in the production.

## Example Code

```typescript
const swimsuitRelax = new Product('Swimsuit Relax', 1000, 'S', 'blue', true);
const john = new Customer('John', 'Doe', 'johndoe@gmail', 'Visa');
john.orderProduct(swimsuitRelax);

const netsConversion = new ProductionProcess(
  'Nets Conversion',
  'Fishing nets are turned into plastic pellets and used to create swimwear.',
  []
);
netsConversion.addProduct(swimsuitRelax);
netsConversion.explainProcess();

## How It Works

1. **Product Ordering**: Customers order products. If the product is available, it is assigned to the customer; if not, the system informs the customer that the product is out of stock.

2. **Production Process**: Products are added to the sustainable production process, where fishing nets are recycled into materials for beachwear.

## Technologies Used

- **TypeScript**: Core language for type safety and object-oriented structure.
- **JavaScript**: Compiled output for execution.
- **Node.js**: For executing the compiled code.

## License

This project is licensed under the MIT License.

## Contact

For more information, feel free to contact me at:
- www.linkedin.com/in/matteo-gallardo-091562285

```
