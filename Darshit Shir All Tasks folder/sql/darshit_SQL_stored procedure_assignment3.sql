use Darshit361

--customer table
Create Table Customer(
C_id Int Identity(1,1),
C_name Varchar(250) Not Null,
City Varchar(100),
Balance Decimal(10,2) Not Null
);

alter table customer
add constraint pk_customer primary key (c_id) 

Insert Into Customer
Values
('Tyler', 'Banfora',10000),
('Odella', 'Mocajuba',9000),
('Hort', 'Senggapi',8500),
('Jenna', 'Banarankrajan',10000),
('Wylma', 'Jiangna',8000),
('Darren', 'Tebingtinggi',9000),
('Lewiss', 'Portela',9500),
('Ahmed', 'Backa Topola',8200),
('Caron', 'Vazhiny',8000),
('Shelia', 'New Yekepa',9000),
('Dynah', 'Xinqiao',9500),
('Dania', 'Tamiso',10000),
('Kirbee', 'Abadou',9000),
('Ilysa', 'Sobral',8000),
('Scotti', 'Ampera',9500),
('Loretta', 'Dongxiao',9000),
('Alyda', 'Gorodets',8500),
('Calida', 'Zhangye',8000),
('Lilian', 'Iset’',10000),
('Dena', 'Ábrego',9000);

--product table
Create Table Products(
P_id Int Identity(1,1),
P_name Varchar(250) Not Null
);

alter table Products
add constraint pk_product Primary Key (P_id)

Insert Into Products
Values 
('Motherboard'),
('Central Processing Unit'),
('Power Supply'),
('Random Access Memory'),
('Hard Disk Drive'),
('Video Card'),
('Solid-State Drive'),
('Optical Disc Drive'),
('Card Reader '),
('Monitor'),
('Keyboard'),
('Mouse'),
('Printer'),
('Speakers'),
('External Hard Drive'),
('Desktop Image Scanner'),
('Projector'),
('Joystick'),
('Headphones'),
('USB Flash Drive');

--orders table
Create Table Orders(
O_id Int Identity(1,1),
O_amt Decimal(10,2) Not Null,
O_Quantity Int Not Null,
O_date Date Not Null,
C_id Int Not Null,
P_id Int Not Null
);

alter table orders
add constraint pk_orders primary key (O_id)

alter table orders
add constraint fk_orders foreign key (C_id) references Customer(c_id)

alter table orders
add constraint fk_orders_product foreign key (P_id) references Products(P_id)

Insert Into Orders
Values 
('2440.90',3, '2022-10-11',5,4),
('2872.23',2, '2022-12-16',11,11),
('3990.65',2, '2022-02-11',7,3),
('3188.96',1, '2022-12-03',2,17),
('3490.10',2, '2022-02-01',14,20),
('1824.83',4, '2022-11-24',4,2),
('2988.62',2, '2022-10-30',17,7),
('4208.30',1, '2022-04-14',6,12),
('2937.98',3,'2022-11-27',1,16),
('1421.65',3, '2022-05-24',13,6),
('4678.27',2, '2022-02-27',10,18),
('4548.88',2, '2022-05-04',18,1),
('4033.52',1,'2022-06-21',15,15),
('3936.81',2,'2022-05-21',3,10),
('4024.45',1,'2022-02-10',19,5),
('2685.47',3,'2022-08-22',8,8),
('3090.58',2,'2022-05-09',12,14),
('2309.24',3,'2022-10-17',9,19),
('1729.62',4,'2022-03-14',20,9),
('3671.97',2,'2022-03-31',16,13);

--1.Create a stored procedure called "get_customers" that returns all customers from the "customers" table.
create proc get_customers
as
begin
	select *from Customer
end

exec get_customers

--2.Create a stored procedure called "get_orders" that returns all orders from the "orders" table.
create proc get_orders
as
begin
	select *from Orders
end
exec get_orders

--3.Create a stored procedure called "get_order_details" that accepts an order ID as a parameter and returns the details of that order (i.e., the products and quantities).
create or alter proc get_order_details
@orderId int
as 
begin
	select o.*,p.P_name from Orders o inner join Products p on o.P_id = p.P_id where O_id = @orderId
end
exec get_order_details 1

--4.Create a stored procedure called "get_customer_orders" that accepts a customer ID as a parameter and returns all orders for that customer.
create or alter proc get_customer_orders
@customerID int
as
begin
	select o.* from Orders o inner join Customer c on o.C_id = c.C_id where c.C_id = @customerID
end
exec get_customer_orders 3

--5.Create a stored procedure called "get_order_total" that accepts an order ID as a parameter and returns the total amount of the order.
create or alter proc get_order_total
@oId int
as
begin
	select O_amt from Orders where O_id=@oId
end
exec get_order_total 5

--6.Create a stored procedure called "get_product_list" that returns a list of all products from the "products" table.
create or alter proc get_product_list
as
begin
	select * from Products
end
exec get_product_list

--7.Create a stored procedure called "get_product_info" that accepts a product ID as a parameter and returns the details of that product.
create or alter proc get_product_info
@productId int
as
begin
	select * from Products where P_id = @productId
end
exec get_product_info 2

--8.Create a stored procedure called "get_customer_info" that accepts a customer ID as a parameter and returns the details of that customer.
create or alter proc get_customer_info
@cId int
as
begin
	select * from Customer where C_id = @cId
end
exec get_customer_info 6

--9.Create a stored procedure called "update_customer_info" that accepts a customer ID and new information as parameters and updates the customer's information in the "customers" table.
create or alter proc update_customer_info
@cId int,
@nInfo varchar(50)
as
begin
	update Customer set city = @nInfo where C_id = @cId 
end
exec update_customer_info 5,rajkot

--10.Create a stored procedure called "delete_customer" that accepts a customer ID as a parameter and deletes that customer from the "customers" table.
create or alter proc delete_customer
@cId int
as
begin
	delete from Customer where C_id = @cId
end
exec delete_customer 6

--11.Create a stored procedure called "get_order_count" that accepts a customer ID as a parameter and returns the number of orders for that customer.
create or alter proc get_order_count
@cId int
as
begin
	select O.C_id,Count(O.C_id) as number_of_orders from Orders o
	where O.C_id=@cId
	Group By O.C_id
end
exec get_order_count 5

--12.Create a stored procedure called "get_customer_balance" that accepts a customer ID as a parameter and returns the customer's balance (i.e., the total amount of all orders minus the total amount of all payments).
create or alter proc get_customer_balance
@cId int
as
begin
	select c.C_id,(c.Balance-(o.O_amt*o.O_Quantity)) As Customer_remaining_balance from customer c
	inner join Orders o on c.C_id=o.C_id Where c.C_id=@cId
end
exec get_customer_balance 4

--13.Create a stored procedure called "get_customer_payments" that accepts a customer ID as a parameter and returns all payments made by that customer.
create or alter proc get_customer_payments
@cId int
as
begin
	select o.C_id,o.O_id,(o.O_amt*o.O_Quantity) As payments from Orders o
	Where o.C_id=@cId
	Group By o.C_id,o.O_id,(o.O_amt*o.O_Quantity)
end
exec get_customer_payments 2

--14.Create a stored procedure called "add_customer" that accepts a name and address as parameters and adds a new customer to the "customers" table.
create or alter proc add_customer
@name varchar(50),
@address varchar(200)
as
begin
	insert into Customer values (@name,@address,20000)
end
exec add_customer 'darshit', 'rajkot'

--15.Create a stored procedure called "get_top_products" that returns the top 10 products based on sales volume.
create or alter proc get_top_products
as
begin
	select top 10 o.P_id,Sum(o.O_amt*o.O_Quantity) As Sales_volume from Orders o
	Group By o.P_id
	Order By Sum(o.O_amt*o.O_Quantity) Desc
end
exec get_top_products

--16.Create a stored procedure called "get_product_sales" that accepts a product ID as a parameter and returns the total sales volume for that product.
create or alter proc get_product_sales
@pId int
as
begin
	select p.P_id,(o.O_amt*o.O_Quantity) as total_sales_volume  from Products p
	inner join Orders o on p.P_id = o.P_id where p.P_id = @pId
end
exec get_product_sales 15

--17.Create a stored procedure called "get_customer_orders_by_date" that accepts a customer ID and date range as parameters and returns all orders for that customer within the specified date range.
create or alter proc get_customer_orders_by_date
@cId int,
@startDate date,
@endDate date
as
begin
	Select * From Orders o 
	Where  o.O_date Between @startDate And @endDate And o.C_id=@cId 
end
exec get_customer_orders_by_date 5,'2005-01-01','2023-01-01'

--18.Create a stored procedure called "get_order_details_by_date" that accepts an order ID and date range as parameters and returns the details of that order within the specified date range.
create or alter proc get_order_details_by_date
@oId int,
@startDate date,
@endDate date
as
begin
	Select * From Orders o
	Where o.O_id=@oId And o.O_date Between @startDate And @endDate
end
exec get_order_details_by_date 10,'2005-01-01','2023-01-01'

--19.Create a stored procedure called "get_product_sales_by_date" that accepts a product ID and date range as parameters and returns the total sales volume for that product within the specified date range.
create or alter proc get_product_sales_by_date
@pId Int,
@startDate Date,
@endDate Date
As
Begin
	Select o.P_id,o.O_date,(o.O_amt*o.O_Quantity) Total_sales From Orders O
	Where o.P_id=@pId And o.O_date Between @startDate And @endDate
End
exec get_product_sales_by_date 20,'2005-01-01','2023-01-01'

--20.Create a stored procedure called "get_customer_balance_by_date" that accepts a customer ID and date range as parameters and returns the customer's balance within the specified date range.
create or alter proc get_customer_balance_by_date
@cId Int,
@startDate Date,
@endDate Date
As
Begin
	Select c.C_id,(c.Balance-(o.O_amt*o.O_Quantity)) As c_balance From Orders O 
	Inner Join Customer c On O.C_id=C.C_id
	Where O.C_id=@cId And O.O_date Between @startDate And @endDate
End
Exec get_customer_balance_by_date 8,'2005-01-01','2023-01-01'

--21.Create a stored procedure called "add_order" that accepts a customer ID, order date, and total amount as parameters and adds a new order to the "orders" table.
create or alter proc add_order
@cId Int,
@orderDate Date,
@totalAmount int
as
begin
	insert into Orders values (@totalAmount,3,@orderDate,@cId,15)
end
exec add_order 2500,'2023-01-01',1

--22.Create a stored procedure called "update_order_total" that accepts an order ID and a new total amount as parameters and updates the total amount of the order in the "orders" table.
create or alter proc update_order_total
@oId int,
@totalAmount int
as
begin
	update Orders set O_amt=@totalAmount where O_id = @oId
end
exec update_order_total 9,3500

--23.Create a stored procedure called "delete_order" that accepts an order ID as a parameter and deletes that order from the "orders" table.
Create or alter Proc delete_order
@oId Int
As
Begin
	Delete From  Orders  Where O_id=@oId
End

Exec delete_order 20

