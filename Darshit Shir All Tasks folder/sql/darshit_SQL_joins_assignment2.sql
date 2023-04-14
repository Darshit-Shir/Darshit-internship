use Darshit361

CREATE TABLE Employee_Details(
	EMP_IDNO INT PRIMARY KEY,
	EMP_FNAME VARCHAR(250) NOT NULL,
	EMP_LNAME VARCHAR(250),
	EMP_DEPT INT
);

INSERT INTO Employee_Details VALUES(127323,'Michale','Robbin',57);
INSERT INTO Employee_Details VALUES(526689,'Carlos','Snares',63);
INSERT INTO Employee_Details VALUES(843795,'Enric','Dosio',57);
INSERT INTO Employee_Details VALUES(328717,'Jhon','Snares',63);
INSERT INTO Employee_Details VALUES(444527,'Joseph','Dosni',47);
INSERT INTO Employee_Details VALUES(659831,'Zanifer','Emily',47);
INSERT INTO Employee_Details VALUES(847674,'Kuleswar','Sitaraman',57);
INSERT INTO Employee_Details VALUES(748681,'Henrey','Gabriel',47);
INSERT INTO Employee_Details VALUES(555935,'Alex','Manuel',57);
INSERT INTO Employee_Details VALUES(539569,'George','Mardy',27);
INSERT INTO Employee_Details VALUES(733843,'Mario','Saule',63);
INSERT INTO Employee_Details VALUES(631548,'Alan','Snappy',27);
INSERT INTO Employee_Details VALUES(839139,'Maria','Foster',57);

CREATE TABLE employee_department(
	DPT_CODE INT PRIMARY KEY,
	DPT_NAME VARCHAR(250) NOT NULL,
	DPT_ALLOTMENT INT 
);
 
INSERT INTO employee_department VALUES(57,'IT',65000);
INSERT INTO employee_department VALUES(63,'Finance',15000);
INSERT INTO employee_department VALUES(47,'HR',240000);
INSERT INTO employee_department VALUES(27,'RD',55000);
INSERT INTO employee_department VALUES(89,'QC',75000);

ALTER TABLE Employee_Details
ADD FOREIGN KEY (EMP_DEPT) REFERENCES employee_department(DPT_CODE);

CREATE TABLE company_master(
	COM_ID INT PRIMARY KEY,
	COM_NAME VARCHAR(250) NOT NULL
);

INSERT INTO company_master VALUES(11,'Samsung');
INSERT INTO company_master VALUES(12,'iBall');
INSERT INTO company_master VALUES(13,'Epsion');
INSERT INTO company_master VALUES(14,'Zebronics');
INSERT INTO company_master VALUES(15,'Asus');
INSERT INTO company_master VALUES(16,'Frontech');

CREATE TABLE item_master(
	PRO_ID INT PRIMARY KEY,
	PRO_NAME VARCHAR(250) NOT NULL,
	PRO_PRICE DECIMAL(10,2),
	PRO_COM INT  FOREIGN KEY REFERENCES company_master(COM_ID)
);

INSERT INTO item_master VALUES(101,'Mother Board',3200,15);
INSERT INTO item_master VALUES(102,'Key Board',450,16);
INSERT INTO item_master VALUES(103,'ZIP drive',250,14);
INSERT INTO item_master VALUES(104,'Speaker',550,16);
INSERT INTO item_master VALUES(105,'Monitor',5000,11);
INSERT INTO item_master VALUES(106,'DVD drive',900,12);
INSERT INTO item_master VALUES(107,'CD drive',800,12);
INSERT INTO item_master VALUES(108,'Printer',2600,13);
INSERT INTO item_master VALUES(109,'Refill cartridge',350,13);
INSERT INTO item_master VALUES(110,'Mouse',250,12);

CREATE TABLE order_detail(
	ord_no INT PRIMARY KEY,
	purch_amt DECIMAL(10,2),
	ord_date DATE,
	customer_id INT NOT NULL,
	salesman_id INT
);

INSERT INTO order_detail VALUES(70001,150.5,'2012-10-05',3005,5002);
INSERT INTO order_detail VALUES(70009,270.65,'2012-09-10',3001,5005);
INSERT INTO order_detail VALUES(70002,65.26,'2012-10-05',3002,5001);
INSERT INTO order_detail VALUES(70004,110.5,'2012-08-17',3009,5003);
INSERT INTO order_detail VALUES(70007,948.5,'2012-09-10',3005,5002);
INSERT INTO order_detail VALUES(70005,2400.6,'2012-07-27',3007,5001);
INSERT INTO order_detail VALUES(70008,5760,'2012-09-10',3002,5001);
INSERT INTO order_detail VALUES(70010,1983.43,'2012-10-10',3004,5006);
INSERT INTO order_detail VALUES(70003,2480.4,'2012-10-10',3009,5003);
INSERT INTO order_detail VALUES(70012,250.45,'2012-06-27',3008,5002);
INSERT INTO order_detail VALUES(70011,75.29,'2012-08-17',3003,5007);
INSERT INTO order_detail VALUES(70013,3045.6,'2012-04-25',3002,5001);

CREATE TABLE salesman_detail(
	salesman_id INT PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	city VARCHAR(250),
	commission DECIMAL(5,2)
);

INSERT INTO salesman_detail VALUES(5001,'James Hoog','New York',0.15);
INSERT INTO salesman_detail VALUES(5002,'Nail Knite','Paris',0.13);
INSERT INTO salesman_detail VALUES(5005,'Pit Alex','London',0.11);
INSERT INTO salesman_detail VALUES(5006,'Mc Lyon','Paris',0.14);
INSERT INTO salesman_detail VALUES(5007,'Paul Adam','Rome',0.13);
INSERT INTO salesman_detail VALUES(5003,'Lauson Hen','San Jose',0.12);

CREATE TABLE customer_detail(
	customer_id INT PRIMARY KEY,
	cust_name VARCHAR(250) NOT NULL,
	city VARCHAR(250),
	grade INT,
	salesman_id INT FOREIGN KEY REFERENCES salesman_detail(salesman_id)
);

INSERT INTO customer_detail VALUES(3002,'Nick Rimando','New York',100,5001);
INSERT INTO customer_detail VALUES(3007,'Brad Davis','New York',200,5001);
INSERT INTO customer_detail VALUES(3005,'Graham Zusi','California',200,5002);
INSERT INTO customer_detail VALUES(3008,'Julian Green','London',300,5002);
INSERT INTO customer_detail VALUES(3004,'Fabian Johnson','Paris',300,5006);
INSERT INTO customer_detail VALUES(3009,'Geoff Cameron','Berlin',100,5003);
INSERT INTO customer_detail VALUES(3003,'Jozy Altidor','Moscow',200,5007);
INSERT INTO customer_detail(customer_id,cust_name,city,salesman_id) VALUES(3001,'Brad Guzan','London',5005);

ALTER TABLE order_detail
ADD CONSTRAINT FK_Sid
FOREIGN KEY (salesman_id) REFERENCES salesman_detail(salesman_id);

ALTER TABLE order_detail
ADD CONSTRAINT FK_Cid
FOREIGN KEY (customer_id) REFERENCES customer_detail(customer_id);

--1. Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to the same city
select s.name as salesman_name, c.cust_name,s.city from salesman_detail s
inner join customer_detail c on s.salesman_id = c.salesman_id where s.city = c.city

--2. Write a SQL statement to make a list with order no, purchase amount, customer name and their cities for those orders which order amount between 500 and 2000
select o.ord_no,o.purch_amt,c.cust_name,c.city from order_detail o
inner join customer_detail c on o.customer_id = c.customer_id where o.purch_amt between 500 and 2000

--3. Write a SQL statement to know which salesman are working for which customer.
select s.name as salesman_name,c.cust_name as customer_name from salesman_detail s
inner join customer_detail c on s.salesman_id = c.salesman_id

--4. Write a SQL statement to find the list of customers who appointed a salesman for their jobs who gets a commission from the company is more than 12%
select c.cust_name,s.name as salesman_name,s.commission from customer_detail c
inner join salesman_detail s on c.salesman_id = s.salesman_id where s.commission > .12

--5. Write a SQL statement to find the list of customers who appointed a salesman for their jobs who does not live in the same city where their customer lives, and gets a commission is above 12%
select c.cust_name,s.name as salesman_name,s.city as salesman_city,c.city as customer_city,s.commission from customer_detail c
inner join salesman_detail s on c.salesman_id = s.salesman_id where s.city != c.city and s.commission > .12

--6. Write a SQL statement to find the details of a order i.e. order number, order date, amount of order, which customer gives the order and which salesman works for that customer and how much commission he gets for an order.
select o.ord_no,o.ord_date,o.purch_amt,c.cust_name,s.name as salesman_name,s.commission as salesman_commission from order_detail o
inner join customer_detail c on o.customer_id = c.customer_id
inner join salesman_detail s on o.salesman_id = s.salesman_id

--7. Write a SQL statement to make a join on the tables salesman, customer and orders in such a form that the same column of each table will appear once and only the relational rows will come.
select * from salesman_detail s
inner join customer_detail c on s.salesman_id = c.salesman_id
inner join order_detail o on o.customer_id = c.customer_id
--This query will be done with the use of natural join which doesn't work in mssql

--8. Write a SQL statement to make a list in ascending order for the customer who works either through a salesman or by own. 
select c.customer_id,c.cust_name,s.name as salesman_name from customer_detail c
left join salesman_detail s on c.salesman_id = s.salesman_id
order by c.customer_id

--9. Write a SQL statement to make a list in ascending order for the customer who holds a grade less than 300 and works either through a salesman or by own. 
select c.* from customer_detail c
left join salesman_detail s on c.salesman_id = s.salesman_id where c.grade < 300
order by c.customer_id

--10. Write a SQL statement to make a report with customer name, city, order number, order date, and order amount in ascending order according to the order date to find that either any of the existing customers have placed no order or placed one or more orders.
select c.cust_name,c.city,o.ord_no,o.ord_date,o.purch_amt from customer_detail c
left join order_detail o on c.customer_id = o.customer_id
order by o.ord_date

--11. Write a SQL statement to make a report with customer name, city, order number, order date, order amount salesman name and commission to find that either any of the existing customers have placed no order or placed one or more orders by their salesman or by own. 
select c.cust_name,c.city,o.ord_no,o.purch_amt,s.name as salesman_name,s.commission  from customer_detail c
left join order_detail o on c.customer_id = o.customer_id
left join salesman_detail s on o.salesman_id = s.salesman_id

--12. Write a SQL statement to make a list in ascending order for the salesmen who works either for one or more customer or not yet join under any of the customers.  
select s.*,c.cust_name from salesman_detail s
left join customer_detail c on s.salesman_id = c.salesman_id

--13. Write a SQL statement to make a list for the salesmen who works either for one or more customer or not yet join under any of the customers who placed either one or more orders or no order to their supplier.
select s.*,c.cust_name,o.ord_no from salesman_detail s
left join customer_detail c on s.salesman_id = c.salesman_id
left join order_detail o on c.customer_id = o.customer_id

--14. Write a SQL statement to make a list for the salesmen who either work for one or more customers or yet to join any of the customer. 
--The customer may have placed, either one or more orders on or above order amount 2000 and must have a grade, or he may not have placed any order to the associated supplier.
select c.cust_name, c.city, c.grade, s.name as salesman_name, o.ord_no, o.ord_date, o.purch_amt from customer_detail c
right join salesman_detail s on c.salesman_id = s.salesman_id
left join order_detail o on c.customer_id = o.customer_id where o.purch_amt>2000 and c.grade is not null

--15 . Write a SQL statement to make a report with customer name, city, order no. order date, purchase amount for those customers from the existing list who placed one or more orders or which order(s) have been placed by the customer who is not on the list.
select c.cust_name, c.city, o.ord_no, o.ord_date,o.purch_amt as order_amount from customer_detail c
full JOIN order_detail o on c.customer_id = o.customer_id

--16 . Write a SQL statement to make a report with customer name, city, order no. order date, purchase amount for only those customers on the list who must have a grade and placed one or more orders or which order(s) have been placed by the customer who is neither in the list not have a grade. 
select c.cust_name, c.city, o.ord_no, o.ord_date,o.purch_amt as order_amount from customer_detail c
full JOIN order_detail o 
on c.customer_id = o.customer_id where C.grade is not null;

--17 . Write a SQL statement to make a cartesian product between salesman and customer i.e. each salesman will appear for all customer and vice versa.
select * from salesman_detail 
cross join customer_detail;

--18 . Write a SQL statement to make a cartesian product between salesman and customer i.e. each salesman will appear for all customer and vice versa for that customer who belongs to a city.
select * from salesman_detail s
cross join customer_detail c where s.city is not null;

--19 . Write a SQL statement to make a cartesian product between salesman and customer i.e. each salesman will appear for all customer and vice versa for those salesmen who belongs to a city and the customers who must have a grade. 
select * from salesman_detail s
cross join customer_detail c
where s.city is not null and c.grade is not null;

--20 . Write a SQL statement to make a cartesian product between salesman and customer i.e. each salesman will appear for all customer and vice versa for those salesmen who must belong a city which is not the same as his customer and the customers should have an own grade. 
select * from salesman_detail s
cross join customer_detail c
where s.city is not null and c.grade is not null
and s.city <> c.city;

--21 . Write a SQL query to display all the data from the item_mast, including all the data for each item's producer company.
select * from item_master i
inner join company_master c
on i.PRO_COM = c.COM_ID;

--22 . Write a SQL query to display the item name, price, and company name of all the product
select i.PRO_NAME, i.PRO_PRICE, c.COM_NAME from item_master i
inner join company_master c
on i.PRO_COM = c.COM_ID;

--23 . Write a SQL query to display the average price of items of each company, showing the name of the company. 
SELECT AVG(I.PRO_PRICE) AS average_price, C.COM_NAME FROM item_master I
INNER JOIN company_master C
ON I.PRO_COM = C.COM_ID
GROUP BY C.COM_NAME;

--24 . Write a SQL query to display the names of the company whose products have an average price larger than or equal to Rs. 350.
select avg(i.PRO_PRICE) as average_price, c.COM_NAME from item_master i
inner join company_master c
on i.PRO_COM = c.COM_ID
group by c.COM_NAME
having avg(i.PRO_PRICE) >= 350;

--25 . Write a SQL query to display the name of each company along with the ID and price for their most expensive product.
select * from company_master c,item_master i
where i.PRO_COM = c.COM_ID and i.PRO_PRICE = (select max(i.PRO_PRICE) from item_master i where i.PRO_COM=c.COM_ID)

--26 . Write a query in SQL to display all the data of employees including their department
select * from Employee_Details e
inner join employee_department d on e.EMP_DEPT = d.DPT_CODE

--27 . Write a query in SQL to display the first name and last name of each employee, along with the name and sanction amount for their department.
select e.EMP_FNAME,e.EMP_LNAME,d.DPT_ALLOTMENT as sanction_amount from Employee_Details e
inner join  employee_department d on e.EMP_DEPT = d.DPT_CODE

--28 . Write a query in SQL to find the first name and last name of employees working for departments with a budget more than Rs. 50000. 
select e.EMP_FNAME,e.EMP_LNAME from Employee_Details e
inner join employee_department d on e.EMP_DEPT = d.DPT_CODE where d.DPT_ALLOTMENT > 50000

--29 . Write a query in SQL to find the names of departments where more than two employees are working.
select d.DPT_NAME from employee_department d
inner join Employee_Details e on e.EMP_DEPT = d.DPT_CODE
group by d.DPT_NAME
having count(*) > 2

--30 . Write a query to display all the orders from the orders table issued by the salesman 'Paul Adam'
select o.* from order_detail o
inner join salesman_detail s on o.salesman_id = s.salesman_id where s.name = 'Paul Adam'

--31 . Write a query to display all the orders for the salesman who belongs to the city London.
select o.*,s.city from order_detail o
inner join salesman_detail s on o.salesman_id = s.salesman_id where s.city = 'London'

--32 . Write a query to find all the orders issued against the salesman who may works for customer whose id is 3007.
select * from order_detail o
inner join customer_detail c on o.customer_id = c.customer_id where c.customer_id = 3007

--33 . Write a query to display all the orders which values are greater than the average order value for 10th October 2012.
select * from order_detail
where purch_amt > (select avg(purch_amt) from order_detail where ord_date = '2012-10-10')

--34 . Write a query to find all orders attributed to a salesman in New york.
select o.*,s.city from order_detail o
inner join salesman_detail s on o.salesman_id = s.salesman_id where s.city = 'New York'

--35 . Write a query to count the customers with grades above New York's average
select grade ,count(*) as number_of_customer from customer_detail
group by grade
having grade > (select avg(grade) from customer_detail where city = 'New York')

--36 . Write a query to display all the customers with orders issued on date 17th August, 2012
select c.*,o.ord_date from customer_detail c
inner join order_detail o on c.customer_id = o.customer_id where o.ord_date = '2012-08-17'

--37 . Write a query to find the name and numbers of all salesmen who had more than one customer. 
select s.name,count(c.salesman_id)  from salesman_detail s
inner join customer_detail c on s.salesman_id = c.salesman_id group by s.name,c.salesman_id having count(c.salesman_id) > 1


--38 . Write a query to find all orders with order amounts which are above-average amounts for their customers.
select * from order_detail o
where o.purch_amt > (select avg(od.purch_amt) from order_detail od where o.customer_id = od.customer_id)

--39 . Write a queries to find all orders with order amounts which are on or above-average amounts for their customers.  
select * from order_detail o
where o.purch_amt >= (select avg(od.purch_amt) from order_detail od where o.customer_id = od.customer_id)

--40 . Write a query to find the sums of the amounts from the orders table, grouped by date, eliminating all those dates where the sum was not at least 1000.00 above the maximum order amount for that date
select o.ord_date,sum(o.purch_amt) from order_detail o
group by o.ord_date
having sum(o.purch_amt) > (select 1000.00 + max(purch_amt) from order_detail od 
where o.ord_date = od.ord_date)


--41 . Write a query to extract the data from the customer table if and only if one or more of the customers in the customer table are located in London. 
select * from customer_detail 
where exists (select * from customer_detail where city = 'London') 

--42 . Write a query to find the salesmen who have multiple customers. 
select * from salesman_detail s
where salesman_id in  (select distinct salesman_id from customer_detail c1
where exists (select * from customer_detail c2 where c1.salesman_id = c2.salesman_id and c1.customer_id <> c2.customer_id))

--43 . Write a query to find all the salesmen who worked for only one customer
select * from salesman_detail s
where salesman_id in (select distinct salesman_id from customer_detail c1 where not exists
(select * from customer_detail c2 where c1.salesman_id=c2.salesman_id and c1.customer_id <>c2.customer_id))

--44 . Write a query that extract the rows of all salesmen who have customers with more than one orders.


--Employee_Details employee_department company_master item_master order_detail salesman_detail customer_detail
--45 . Write a query to find salesmen with all information who lives in the city where any of the customers lives. 

--46 . Write a query to find all the salesmen for whom there are customers that follow them.

--47 . Write a query to display the salesmen which name are alphabetically lower than the name of the customers.

--48 . Write a query to display the customers who have a greater gradation than any customer who belongs to the alphabetically lower than the city New York.

--49 . Write a query to display all the orders that had amounts that were greater than at least one of the orders on September 10th 2012. 

--50 . Write a query to find all orders with an amount smaller than any amount for a customer in London.

--51 . Write a query to display all orders with an amount smaller than any amount for a customer in London.

--52 . Write a query to display only those customers whose grade are, in fact, higher than every customer in New York. 

--53 . Write a query to find only those customers whose grade are, higher than every customer to the city New York. 

--54 . Write a query to get all the information for those customers whose grade is not as the grade of customer who belongs to the city London

--55 . Write a query to find all those customers whose grade are not as the grade, belongs to the city Paris.

--56 . Write a query to find all those customers who hold a different grade than any customer of the city Dallas.

--57 . Write a SQL query to find the average price of each manufacturer's products along with their name.

--58 . Write a SQL query to display the average price of the products which is more than or equal to 350 along with their names.

--59 . Write a SQL query to display the name of each company, price for their most expensive product along with their Name.
