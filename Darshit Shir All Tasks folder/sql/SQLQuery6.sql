-- to use database--
use Darshit361

--employee table--
create table Employee
(
EmployeeId int,
EmployeeName varchar(200),
MobileNumber int,
Email varchar(200),
address varchar(200),
DepartmentId int,
)

--to delete row--
delete from Employee where EmployeeId = 1

--to add identity we have to add another row and delete existing row than rename it
alter table Employee
add Id int identity(1,1)

--to insert data--
INSERT INTO Employee (EmployeeId, EmployeeName, MobileNumber, Email, address, DepartmentId, Salary, Age)
VALUES
  (1, 'John Doe', 5555555555, 'johndoe@example.com', '123 Main St', 101, 50000, 30),
  (2, 'Jane Smith', 5555555556, 'janesmith@example.com', '456 Oak St', 102, 60000, 35),
  (3, 'Bob Johnson', 5555555557, 'bobjohnson@example.com', '789 Pine St', 103, 55000, 27),
  (4, 'Sara Lee', 5555555558, 'saralee@example.com', '321 Elm St', 104, 65000, 40),
  (5, 'Tom Jones', 5555555559, 'tomjones@example.com', '654 Cedar St', 105, 55000, 29),
  (6, 'Amy Adams', 5555555560, 'amyadams@example.com', '987 Maple St', 106, 70000, 32),
  (7, 'Jim Brown', 5555555561, 'jimbrown@example.com', '741 Birch St', 107, 75000, 45),
  (8, 'Karen Kim', 5555555562, 'karenkim@example.com', '369 Willow St', 108, 60000, 33),
  (9, 'Mike Miller', 5555555563, 'mikemiller@example.com', '258 Oak St', 109, 55000, 28),
  (10, 'Lisa Lopez', 5555555564, 'lisalopez@example.com', '147 Maple St', 110, 65000, 39);

select * from Employee

--to select in ascending or descending order--
select * from Employee
order by EmployeeId desc

--to select null value or not null values--
select * from Employee
where address is null

-- to upadate in table--
update Employee
set address = Null
where EmployeeId = 3

--to selecet top three records--
select top 3 * from Employee

--to select min max avg sum count (aggregate function) values--
select count(Salary) as [Max Salary] from Employee

--like operator--
select * from Employee
where EmployeeName
like '%n'

--wildcard characters--
--[] it will select EmployeeName starting with b or s or k--
select * from Employee
where EmployeeName
like '[bsk]%'

--^ it will work like not(!)--
select * from Employee
where EmployeeName
like '[^bsk]%'

-- wildcard - will define range--
select * from Employee
where EmployeeName
like '[a-l]%'

--between operator--
select * from Employee
where EmployeeId between 1 and 5
order by salary desc

--to drop column--
alter table Employee
drop column DateOfBirth

--to add or remove not null constraint we have to alter table--
alter table Employee
alter column EmployeeId int Not Null

--to add primary key constraint--
alter table Employee
add constraint pk_employee primary key (EmployeeId)

--to drop constraint--
alter table Employee
drop constraint pk_customer

--to drop constraint unique
alter table Employee
drop constraint uk_id

--case Expression (it is like if else condition)--
select  EmployeeId,Salary,
case when Salary>65000 then 'salary is greater than 65000'
when salary = 65000 then  'salary is 65000'
else 'salary is less than 65000'
end as [salary chart]
from Employee


-- customer table--
create table customer (
orderId int Not Null,
EmployeeId int,
constraint pk_customer primary key (orderId),
constraint fk_customer foreign key (EmployeeId)
references Employee(EmployeeId)
)
select * from customer

--union combines two select statement--
select EmployeeId from Employee
union all
select EmployeeId from customer


-- to add constraint -> unique --
alter table customer
add constraint uk_customer unique (orderId)

-- to remove constraint--
alter table customer
drop uk_customer

-- to delete row--
delete from customer where EmployeeId = 2

-- to rename column --
exec sp_rename 'customer.customerId','orderId','column'

-- to remove column--
alter table customer
drop column customerName

-- to add constraint primary key--
alter table customer
add constraint pk_customer primary key (customerId)

-- to drop constraint--
alter table customer
drop constraint pk_customer

-- to give index--
create index idx_customer
on customer(customerName)

-- to drop index--
drop index customer.idx_customer

-- inner join --
Select e.EmployeeId,e.EmployeeName,c.orderId,c.EmployeeId From Employee As E
Inner Join customer As C 
On E.EmployeeId=C.EmployeeId

--to create procedure--
CREATE PROCEDURE 
employeetable
as 
begin
select * from Employee
end

EXEC employeetable

--outer join--
select e.EmployeeId,e.EmployeeName,e.Salary,c.orderId,c.EmployeeId from Employee as e
full outer join customer as c 
on e.EmployeeId = c.EmployeeId


--student table--
create table student(
ID int not null identity(1,1),
EnrollmentNo bigint,
StudentName text,
Address varchar(500) ,
Email varchar(1000) default null,
Gender char(50) not null,
percentage decimal(2,2),
TutionFee smallmoney,
JoiningDate datetime,
currentTimeStamp timestamp,
age int,
constraint chk_student check(age>=5),
constraint pk_student primary key (EnrollmentNo),
constraint uc_student unique (Email),
)

select * from student

insert into student (EnrollmentNo,StudentName,Address,Gender,percentage,TutionFee,JoiningDate,age)
values
(190470107068,'Darshit','Rajkot','darshitshir@gmail.com','Male',99.99,46500,'2019-06-12',21),
(190470107070,'Devarshi','Rajkot','devarshi@gmail.com','Male',90,46500,'2019-06-12',21),
(190470107080,'Vatsal','Rajkot','vatsal@gmail.com','Male',95,5000,'2019-06-20',21),
(190470107090,'john','Ahemdabad','john@gmail.com','Male',75,50000,'2020-05-15',20)

--select into copies data from one table into new table--
select * into std
from student
where 1=0

--for let null value = 0 isnull() or coalesce()--
select StudentName, ID * (EnrollmentNo + isnull(age,0))
from Student

select * from student

--cast to convert datatype for temporary use
select  cast(JoiningDate as date) as [Joining Date]
from student

--transaction in sql
Begin tran
	update student set percentage = 75.000 where ID = 5
commit tran
rollback tran