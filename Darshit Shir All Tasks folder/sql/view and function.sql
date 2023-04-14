select * from Employee_Details

create or alter function getFullName(@fname varchar(100),@lname varchar(100))
returns varchar(200)
as
begin
	return (select @fname + ' ' + @lname)
end

select dbo.getFullName(EMP_FNAME,EMP_LNAME) as fullNAme from Employee_Details

--create view
create view employee_name
as
 select EMP_FNAME,EMP_LNAME from Employee_Details

 select * from employee_name
 
 --create view
 create view get_no_from_1_to_100
 as
 select round(((101-1-1)* rand() + 1),0) as randomNo

 select * from get_no_from_1_to_100
 
sp_helptext randonNo

 --create view for random number between 1 to 20
create or alter view getNo
as 
	
	select  round(((21 -1 -1) * rand() + 1),0) As Random

select * from getNo

--create function for get number between 1 to 10 
--we cant declare function into function so we use view in function
create function randonNo()
returns int
as
begin 
	declare @Random int
	set @Random=(Select * from getno)
	return @Random
end
Select  dbo.randonNo()

select  * from Orders
select * from order_detail

--create procedure for get random order details from orders table
create or alter proc get_data_from_random_int

as
begin
--declare @oId int
--set @oId = (Select  dbo.randonNo())
declare @oId int
	set @oId=(Select * from getno)
	select * from Orders where O_id = @oId
end

exec get_data_from_random_int

create function get_order_details()
returns table
as
	

