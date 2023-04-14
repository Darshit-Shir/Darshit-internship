use DS361DarshitShir

--Create Table Customer [5]
	--Id
	--Name
	--UserName (Must be unique)
	--Password
	--Email (Must be unique)
	--DOB
	--Address
	--ContactNo

create table Customer(
Customer_Id int identity,
Customer_Name varchar(50),
Customer_Username varchar(100),
Customer_Password varchar(200),
Customer_Email varchar(200),
Customer_DOB date,
Customer_Address varchar(200),
Customer_ContactNo bigint
)

alter table Customer
alter column Customer_Id int not null


alter table Customer
add constraint pk_Customer primary key (Customer_Id)

alter table Customer
alter column Customer_Email varchar(200) not null

alter table Customer
add constraint uk_Customer_UName unique (Customer_Username)

alter table Customer
add constraint uk_Customer_Email unique (Customer_Email)

insert into Customer values ('darshit','darshitshir','012345','darshit@gmail.com','2001-10-29','Rajkot',0123456789)
insert into Customer values ('df','sdfdf','45sdf','sdf@gmail.com','2005-10-29','sdffd',5123456789)
insert into Customer values ('dffsfd','sdfdfdf','f45d','sdfff@gmail.com','2003-12-20','sdfdff',0123456745)
insert into Customer values ('ff','fghgh','fgghg','dfgf@gmail.com','2012-01-19','njhghv',1023456789)
insert into Customer values ('gfhfghghfgh','fghgfhghgfh','fghgh','fghghhh@gmail.com','2004-05-05','gjkh',1223456789)

	
--Create Table Salesman
	--Id
	--Name
	--UserName
	--Password
	--Email
	--DOB
	--Address
	--ContactNo
create table Salesman
(
Salesman_Id int identity(100,1) primary key,
Salesman_name varchar(50),
Salesman_Username varchar(100) not null unique,
Salesman_Password varchar(100) not null,
Salesman_Email varchar(100) not null unique,
Salesman_DOB date,
Salesman_Address varchar(200),
Salesman_Contactno bigint
)

insert into Salesman values ('siddharth','sd','dsfdffsd','siddharth@gmail.com','2001-12-12','rajkot',1234568562)
insert into Salesman values ('ffd','gdg','vbxv','vbc@gmail.com','2005-12-12','cvbvv',1234558562)
insert into Salesman values ('mmnbm','mbn','mnbb','bmnm@gmail.com','2007-07-08','mbn',1234448562)
insert into Salesman values ('zcxzc','zxcxc','xzccxz','xzcxcz@gmail.com','2004-04-20','zxcc',1234568872)
insert into Salesman values ('qew','sdfqw','wqewewe','qweeqw@gmail.com','2008-02-28','eqw',1238968562)



--Create Table Category
	--Id
	--Name
create table Category(
Category_Id int identity(1001,1) primary key,
Category_Name varchar(100) not null
)

insert into Category values ('remote')
insert into Category values ('tv')
insert into Category values ('fridge')
insert into Category values ('sdfdf')
insert into Category values ('cxvcxv')
	
--Create Table Items
	--Id
	--Name
	--Category (link to category)
	--Rate
	--DOM (Date of Manufacture)
	--DOE (Date of Expire)
create table Items(
Items_Id int identity(2000,1) primary key,
Items_Name varchar(100),
Category_Id int,
Category_Rate decimal(18,2),
Category_DOM date,
Category_DOE date
)

insert into Items values ('mnbv',1001,5000,'2018-12-12','2020-12-12')
insert into Items values ('xcv',1003,1500,'2015-10-10','2018-10-10')
insert into Items values ('wer',1005,1000,'2020-02-02','2021-02-02')
insert into Items values ('qwe',1001,2000,'2019-03-05','2020-03-05')
insert into Items values ('zxc',1002,3000,'2020-01-20','2021-01-20')


alter table Items
add constraint FK_Items foreign key (Category_Id) references Category(Category_Id)
	
--Create Table ModeOfPayment
	--Id
	--Name

create table ModeOfPayment(
MOP_Id int identity(3001,1),
MOP_Name varchar(200)
)
alter table ModeOfPayment
add constraint PK_ModeOfPayment primary key (MOP_Id)

insert into ModeOfPayment values ('Cash')
insert into ModeOfPayment values ('Net Banking')
insert into ModeOfPayment values ('UPI')
insert into ModeOfPayment values ('UPI')
insert into ModeOfPayment values ('Cash')



--Create Table Orders
	--Id
	--OrderNo (Must be Unique)
	--Customer (link to customer)
	--OrderQty 
	--Bill Amount
	--DOD (Date of Delivery)
	--Salesman (link to salesman)
	--DeliveryAddress
	--City
	--ContactNo
	--MOP (Mode of Payment) (link to payment)
	--OrderStatus (By default 0 if I cancel then should be update to 1)
create table Orders(
Order_ID int identity(3001,1) primary key,
Order_No int not null unique,
Customer_Id int foreign key references Customer(Customer_Id),
Order_Qty int not null,
Bill_Amount int not null,
DOD date,
City varchar(50),
ContactNo bigint,
MOP_Id int foreign key references ModeOfPayment(MOP_Id),
Order_Status bit
)

create or alter proc insertData
@Order_No int,
@Customer_Id int,
@Order_Qty int,
@Bill_Amount int,
@DOD date,
@City varchar(50),
@ContactNo bigint,
@MOP_Id int,
@id int = null

as
begin
	if @id is not null
		begin
		update Orders set Order_No = @Order_No,Customer_Id = @Customer_Id,Order_Qty = @Order_Qty,Bill_Amount = @Bill_Amount,DOD = @DOD,City = @City,ContactNo = @ContactNo,MOP_Id = @MOP_Id
			where Order_ID = @id
		end
	else
		begin
		insert into Orders (Order_No,Customer_Id,Order_Qty,Bill_Amount,DOD,City,ContactNo,MOP_Id)  values (@Order_No,@Customer_Id,@Order_Qty,@Bill_Amount,@DOD,@City,@ContactNo,@MOP_Id)
		end	
end

exec insertData  45004,5,3,900,'2022-02-10','mcmmcvnbvbn',1454567990,3005



alter table Orders
add constraint DF_orders default 0 for Order_Status

--Create Table OrderDetails
	--Id
	--OrderId (link to order)
	--ItemId (link to Items)
	--OrderQty (Order Quantity per Items)
	--OrderAmount (Qty * Rate)

create table OrderDetails(
OrderDetails_Id int identity(4001,1),
Order_ID int foreign key references Orders(Order_ID),
Items_Id int foreign key references Items(Items_Id),
Order_Qty_Per_Items int,
Order_Amount bigint --(Qty * Rate)
)

insert into OrderDetails values (3010,2002,3,3000)

--1. After Creating Table , need to update All table with Primary Key , Clustor Key  and Add Identity [5]

--2. Create a Parameterized Store Procedure to Insert/Update Data in each of tables listed above. (If Primary key of that table is passed then Update else Insert) [8]
--	E.g : SP_AddEditCustomer (By using this procedure I will be able to insert or update data)

--3. Create a Parameterized Store Procedure to retrive all the OrderDetails as per Customer (If CustomerId not passed then retrive all the orders) ( Make sure to Add Everything in Single Procedure) [8]
--	Information I want : 
--		--CustomerName
--		--ItemName
--		--Item Rate
--		--Qty
--		--OrderAmount (Qty * ItemRate)
create proc get_OrderDetails
@CId int = null
as
begin
	if @CId is null
		begin
			select c.Customer_Name,i.Items_Name,i.Category_Rate,o.Order_Qty,(o.Order_Qty*i.Category_Rate) as OrderAmount from Orders o
			inner join OrderDetails od on o.Order_ID = od.Order_ID 
			inner join Customer c on o.Customer_Id = c.Customer_Id
			inner join Items i on od.Items_Id = i.Items_Id

		end
	else
		begin
			select c.Customer_Name,i.Items_Name,i.Category_Rate,o.Order_Qty,(o.Order_Qty*i.Category_Rate) as OrderAmount from Orders o
			inner join OrderDetails od on o.Order_ID = od.Order_ID 
			inner join Customer c on o.Customer_Id = c.Customer_Id
			inner join Items i on od.Items_Id = i.Items_Id
			where c.Customer_Id = @CId
		end
end
exec get_OrderDetails 2


--4. Create a User Defined Function that will retrive TotalOrderAmount from the OrderDetails Table as per Customer. [8]
--	I just want total amount as per customerid I Passed.
select od.Order_Amount as OrderAmount from Orders o
			inner join OrderDetails od on o.Order_ID = od.Order_ID inner join Customer c on o.Customer_Id = c.Customer_Id
			inner join Items i on od.Items_Id = i.Items_Id
			where c.Customer_Id = 2 
	


--5. Create a prameterized Store Procedure to retrive all the Order Information as per Customer. (If CustomerId not passed then retrive all the orders) [8]
--	Information I want : 
--		--CustomerName
--		--OrderNo
--		--OrderQty (Total Qty of all the Items) (Using Function)
--		--OrderAmount (Total Amount of Order) (Using Function)
--		--SalesmanName
--		--Address
--		--City
--		--ContactNo
--		--MOP Name
--		--DOD
		
		--Customer Salesman Category Items ModeOfPayment Orders OrderDetails

--6. Create a Parameterized Store Procedure to Cancel Order as per OrderNo (If I pass wrong orderno then message should be there) [8]

--7. Create a Parameterized Store Procedure for Login as per Customer/Salesman EmailId and Password.  [10]
--	(If credentials matched then show "Login Successfull" then "Invalid User Input" , If EmailId  is not having in the Table then Create Emaild with Password( Random) ).
	
--8. Create a Parameterized Store Procedure for Delete Customer from the UserName	[5]
--	--All the orders linked to that customer should also be deleted.

--9. Create a OrderDetails using OrderId of Order in a Single Store Procedure. [10]

--10. Every Data suppose to be Dynamic (no any Hard Coded) [Addition 25 points] [ Example : Name would be Dynamic , amount would be Dyanmic , Date Would be Dynamic , OrderNo  would be Dynamic , etc... ]