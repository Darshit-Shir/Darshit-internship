use Darshit361
create table EmployeeDetails
(
EmployeeID int identity(1,1) primary key,
FirstName varchar(50),
LastName varchar(50),
Title varchar(100),
BirthDate date,
HireDate date,
ReportsTo INT,
Address varchar(200)
)

INSERT INTO EmployeeDetails VALUES('Doe','John','HR','2000-02-28','2018-02-01',1,'jksdjgfgwekfgh,hvsaghdw');
INSERT INTO EmployeeDetails VALUES('Johnson','Mack','Department Head','1997-03-01','2015-01-01',2,'jksdjgfgwekfgh,hvsaghdw');
INSERT INTO EmployeeDetails VALUES('Winget','Zanifer','Project Manager','1999-04-15','2019-03-01',1,'jksdjgfgwekfgh,hvsaghdw');
INSERT INTO EmployeeDetails VALUES('Johar','Abigiel','Web Designer','2001-06-16','2022-01-01',3,'jkgfgwekfgh,hhdw');
INSERT INTO EmployeeDetails VALUES('Thakkar','Joy','HR','1997-07-22','2016-02-01',2,'gwekfgh,hghdw');
INSERT INTO EmployeeDetails VALUES('Jones','Smith','Web Developer','2000-08-30','2023-02-01',3,'jksdh,hvs');
INSERT INTO EmployeeDetails VALUES('Khan','Dev','Team Lead','1999-10-22','2016-01-01',1,'jkgh,hvghdw');
INSERT INTO EmployeeDetails VALUES('Dogra','Stephen','Project Manager','1997-05-03','2016-03-01',2,'jksdjggh,ghdw');

CREATE TABLE OrdersDetail(
	Order_ID INT PRIMARY KEY IDENTITY(101,1),
	Customer_ID INT,
	Employee_ID INT,
	Order_date DATE
)

alter table OrdersDetail
add constraint FK_customerDetail foreign key (customer_id) references CustomerDetail(Customer_ID)

ALTER TABLE OrdersDetail
ADD CONSTRAINT FK_EmployeeDetails FOREIGN KEY (Employee_ID) REFERENCES EmployeeDetails(Employee_ID);


INSERT INTO OrdersDetail VALUES(1001,1,'2023-03-11');
INSERT INTO OrdersDetail VALUES(1003,6,'2022-12-21');
INSERT INTO OrdersDetail VALUES(1003,2,'2023-03-10');
INSERT INTO OrdersDetail VALUES(1008,4,'2022-11-11');
INSERT INTO OrdersDetail VALUES(1005,8,'2022-12-02');
INSERT INTO OrdersDetail VALUES(1002,5,'2023-02-23');
INSERT INTO OrdersDetail VALUES(1002,6,'2023-01-25');
INSERT INTO OrdersDetail VALUES(1004,4,'2022-10-29');

CREATE TABLE CustomerDetail(
	Customer_ID INT PRIMARY KEY IDENTITY(1001,1),
	Company_Name VARCHAR(250),
	Contact_Name VARCHAR(250),
	Contact_Title VARCHAR(250),
	Customer_Address VARCHAR(MAX),
	Customer_City VARCHAR(100),
	Customer_Country VARCHAR(100)
);

INSERT INTO CustomerDetail VALUES('Shaligram','ABC','HR','hgdsuoiqhjsc','OKHA','INDIA');
INSERT INTO CustomerDetail VALUES('Shaligram','NFM','Team Lead','hgdsfdvc','New York','USA');
INSERT INTO CustomerDetail VALUES('Synoverge','DBD','Project Head','hsdjwgnd','Ahemdabad','INDIA');
INSERT INTO CustomerDetail VALUES('AIMDeck','HDK','HR','iosjdghwe','Pune','INDIA');
INSERT INTO CustomerDetail VALUES('Simform','JHS','Project Manager','hgdgwq','Chicago','USA');
INSERT INTO CustomerDetail VALUES('Simfrom','JDH','HR','hwqdgquwu','Rajkot','INDIA');
INSERT INTO CustomerDetail VALUES('Whappnet','DKL','Team Lead','hsdajhi','Phoenix','USA');
INSERT INTO CustomerDetail VALUES('EquitySoft','JSK','Project Head','oksaxmbw','Jamnagar','INDIA');
INSERT INTO CustomerDetail VALUES('Redixweb','KMD','HR','jsajbjhqwb','Ahemdabad','INDIA');


--Write a SQL query to retrieve the list of all orders made by customers in the "USA".
select * from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID where Customer_Country = 'USA'

--Write a SQL query to retrieve the list of all customers who have placed an order.
select * from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID

--Write a SQL query to retrieve the list of all employees who have not yet placed an order.
select e.* from EmployeeDetails e
left join OrdersDetail o on e.Employee_ID = o.Employee_ID where o.Order_ID is null

--Write a SQL query to retrieve the list of all employees who have placed an order.
select * from EmployeeDetails e
inner join OrdersDetail o on e.Employee_ID = o.Employee_ID

--Write a SQL query to retrieve the list of all customers who have not yet placed an order.
select c.* from CustomerDetail c
left join OrdersDetail o on c.Customer_ID = o.Customer_ID where o.Order_ID is null

--Write a SQL query to retrieve the list of all customers who have placed an order, along with the order date.
select c.*,o.Order_date from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID

--Write a SQL query to retrieve the list of all orders placed by a particular customer.
select o.* from OrdersDetail o 
inner join  CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Customer_ID = 1003

--Write a SQL query to retrieve the list of all orders placed by a particular employee.
select * from OrdersDetail o
inner join EmployeeDetails e on o.Employee_ID = e.Employee_ID where e.Employee_ID = 4

--Write a SQL query to retrieve the list of all orders placed by a particular customer on a particular date.
select * from OrdersDetail o
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Customer_ID = 1001 and o.Order_date = '2023-03-11'

--Write a SQL query to retrieve the list of all customers who have not yet placed an order, sorted by their country.
select c.* from CustomerDetail c
left join OrdersDetail o on c.Customer_ID = o.Customer_ID where o.Order_ID is null order by c.Customer_Country

--Write a SQL query to retrieve the list of all orders placed by customers in the "USA", sorted by order date.
select * from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID where c.Customer_Country = 'USA' order by o.Order_date

--Write a SQL query to retrieve the list of all employees who have not yet placed an order, sorted by last name.
select e.* from EmployeeDetails e
left join OrdersDetail o on e.Employee_ID = o.Employee_ID where o.Order_ID is null order by e.LastName

--Write a SQL query to retrieve the list of all customers who have placed an order, sorted by their company name.
select * from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID order by c.Company_Name

--Write a SQL query to retrieve the list of all employees who have placed an order, sorted by their hire date.
select * from EmployeeDetails e
inner join OrdersDetail o on e.Employee_ID = o.Employee_ID order by e.HireDate

--Write a SQL query to retrieve the list of all customers who have placed an order on a particular date, sorted by their company name.
select * from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID where o.Order_date = '2023-03-11' order by c.Company_Name

--Write a SQL query to retrieve the list of all customers who have placed an order, along with the employee who handled the order.
select e.Employee_id,c.Customer_ID,o.Order_date,e.FirstName as Employee_FirstName  from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID
inner join EmployeeDetails e
on e.Employee_ID = o.Employee_ID 

--Write a SQL query to retrieve the list of all employees who have placed an order, along with the customer who placed the order.
select e.Employee_ID,e.FirstName as Employee_FirstName,o.Order_ID,c.Company_Name from EmployeeDetails e
inner join OrdersDetail o on e.Employee_ID = o.Employee_ID
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID

--Write a SQL query to retrieve the list of all orders placed by customers in a particular country, along with the customer name and order date.
select c.Contact_Name,o.Order_date,c.Customer_Country from OrdersDetail o
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Customer_Country = 'INDIA'

--Write a SQL query to retrieve the list of all orders placed by employees who were born in a particular year, along with the employee name and order date.
select e.FirstName,o.Order_date,e.BirthDate from OrdersDetail o
inner join EmployeeDetails e on o.Employee_ID = e.Employee_ID where e.BirthDate BETWEEN '2000-01-01' AND '2000-12-31'

--Write a SQL query to retrieve the list of all customers who have placed an order, along with the customer name, order date, and employee who handled the order.
select c.Contact_Name,o.Order_date,e.FirstName as employee_FirstName from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID
inner join EmployeeDetails e on e.Employee_ID = o.Employee_ID

--Write a SQL query to retrieve the list of all orders placed by customers who have a particular contact title, along with the customer name and order date.
select c.Contact_Name,c.Contact_Title,o.Order_date from OrdersDetail o
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Contact_Title = 'HR'

--Write a SQL query to retrieve the list of all orders placed by employees who have a particular job title, along with the employee name and order date.
select e.FirstName as Employee_FirstName,e.Title,o.Order_date from OrdersDetail o
inner join EmployeeDetails e on o.Employee_ID = e.Employee_ID where e.Title = 'Project Manager'

--Write a SQL query to retrieve the list of all customers who have placed an order on a particular date, along with the customer name, order date, and employee who handled the order.
select c.Contact_Name,o.Order_date,e.FirstName as Employee_FirstName from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID
inner join EmployeeDetails e on e.Employee_ID = o.Employee_ID
where o.Order_date = '2022-12-21'

--Write a SQL query to retrieve the list of all orders placed by customers in a particular city, along with the customer name and order date.
select c.Contact_Name,o.Order_date,c.Customer_City from OrdersDetail o
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Customer_City = 'Ahemdabad'

--Write a SQL query to retrieve the list of all orders placed by employees who were born in a particular city, along with the employee name and order date.
select e.Employee_ID,e.FirstName,E.BirthDate,o.Order_date,c.Customer_City from EmployeeDetails e
left join OrdersDetail o on  e.Employee_id = o.Employee_ID
inner join CustomerDetail c on c.Customer_ID = o.Customer_ID
where o.Order_date is not null and c.Customer_City ='Ahemdabad'

--Write a SQL query to retrieve the list of all customers who have placed an order, along with the customer name, order date, and employee who handled the order, sorted by order date.
select c.Contact_Name,o.Order_date,e.FirstName from CustomerDetail c
inner join OrdersDetail o on c.Customer_ID = o.Customer_ID
inner join EmployeeDetails e on e.Employee_ID = o.Employee_ID
order by o.Order_date

--Write a SQL query to retrieve the list of all orders placed by customers in a particular country, along with the customer name and order date, sorted by order date.
select c.Contact_Name,o.Order_date from OrdersDetail o
inner join CustomerDetail c on o.Customer_ID = c.Customer_ID where c.Customer_Country = 'USA'
order by o.Order_date


