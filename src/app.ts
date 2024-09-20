//  INTERFACE IPRODUCT
interface IProduct {
    type: string;
    idProduct: number;
    size: string;
    color: string;
    status: boolean;
    assegnaCliente(customer: ICustomer): void;
};

// INTERFACE ICUSTOMER
interface ICustomer {
    name: string;
    firstname: string;
    email: string;
    paymentType: string;
    orderProduct(product: IProduct): void;
};

// INTERFACE IPRODUCTIONPROCESS
interface IProductionProcess {
    processName: string;
    description: string;
    productsInProcess: string[];
    addProduct(product: IProduct): void;
};

// CLASS PRODUCT
class Product implements IProduct {

    constructor(
        public type: string, 
        public idProduct: number,
        public size: string,
        public color: string,
        public status: boolean){}

    assegnaCliente(customer: ICustomer): void {
        console.log(`The product ${this.type} was ordered by ${customer.name} ${customer.firstname} with ${customer.paymentType}.
ID: ${this.idProduct},
Size: ${this.size},
Color: ${this.color}.`);
    }
    
};

// CLASS CUSTOMER
class Customer implements ICustomer {
    
    constructor(public name: string,
        public firstname: string,
        public email: string,
        public paymentType: string){}
        
        orderProduct(product: IProduct): void {
            if(product.status){
                console.log(`The ${product.type} that ${this.name} ${this.firstname} wants to buy is available.`);
                product.assegnaCliente(this);
            } else {console.log(`${this.name} ${this.firstname}, we're sorry but ${product.type} is out of stock.`);
}
        }
}


// CLASS PRODUCTIONPROCESS
class ProductionProcess implements IProductionProcess {

    constructor(
        public processName: string,
        public description: string,
        public productsInProcess: string[],){}

        explainProcess(): void {
            console.log(`${this.processName}: ${this.description}`);
        }

    addProduct(product: IProduct): void {
        this.productsInProcess.push(product.type);
        console.log(`${product.type} is now in ${this.processName} production.`);
    }  
}

// PRODUCTS
const swimsuitRelax = new Product('Swimsuit Relax', 1000, 'S', 'blue', true);
const bikiniRelax = new Product('Bikini Relax', 1100, 'M', 'blue', true);
const swimsuitActive = new Product('Swimsuit Active', 2000, 'M', 'blue', true);
const bikiniActive = new Product('Bikini Active', 2100, 'L', 'blue', true);
const swimsuitExtreme = new Product('Swimsuit Extreme', 3000, 'M', 'blue', true);
const bikiniExtreme = new Product('Bikini Extreme', 3100, 'S', 'blue', true);

// NEXT SEASON
const childswimsuitRelax = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);
const childswimsuitActive = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);
const childswimsuitExtreme = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);


// CUSTOMERS
const john = new Customer('John', 'Doe', 'johndoe@gmail', 'Visa');
const alice = new Customer('Alice', 'Red', 'alicered@gmail', 'Mastercard');
const matteo = new Customer('Matteo', 'Gallardo', 'matteogallardooo@gmail', 'Visa');
const laura = new Customer('Laura', 'Simpson', 'laurasimpson@gmail', 'Mastercard');
const maria = new Customer('Maria', 'Gonzalez', 'maria@gmail', 'Mastercard');
const fred = new Customer('Fred', 'Flinstone', 'fred@gmail', 'Visa');
const manny = new Customer('Manny', 'Machado', 'manny@gmail', 'Visa');
const alfred = new Customer('Alfred', 'Fernandez', 'alfred@gmail', 'Visa');

// PRODUCTION PROCESS
const netsConversion = new ProductionProcess('Nets Conversion', 'Fishing nets are collected and cleaned, then turned into plastic pellets. These pellets are used to make fabric, which is then used to create swimwear. This process helps reduce plastic waste and promotes environmental sustainability.', ['Swetsuit Relax', 'Swetsuit Active', 'Swetsuit Extreme']);

// ORDERS
matteo.orderProduct(swimsuitExtreme);
alice.orderProduct(bikiniRelax);
fred.orderProduct(swimsuitActive);
laura.orderProduct(bikiniExtreme);
manny.orderProduct(childswimsuitRelax);
maria.orderProduct(swimsuitActive);
john.orderProduct(childswimsuitExtreme);
alfred.orderProduct(bikiniActive)
matteo.orderProduct(swimsuitRelax)

// EXPLAIN AND ADD PRODUCTION PRODUCTS
netsConversion.explainProcess();
netsConversion.addProduct(childswimsuitRelax);
netsConversion.addProduct(childswimsuitExtreme);
netsConversion.addProduct(childswimsuitActive);






