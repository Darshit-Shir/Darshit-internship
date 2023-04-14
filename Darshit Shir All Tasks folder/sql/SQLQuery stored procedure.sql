use Darshit361

--to create stored procedure
CREATE PROCEDURE 
employeetable
as 
begin
select * from Employee
end

EXEC employeetable

--to get defination of procedure use sp_helptext
sp_helptext employeetable

-- to get table when transaction is going on use with(nolock)
select * from dbo.student with(nolock)

--procedure for create table
create procedure
create_cricket_table
as
begin
create table cricket
(
serialNo int identity,
PlayerId int not null primary key,
playerName varchar(200),
TotalRuns bigint,
MatchesPlayed int
)
end

exec create_cricket_table

--to drop procedure
drop procedure create_cricket_table

--procedure for insert data into table
create procedure InsertData
@PId int,
@PName varchar(200),
@Runs bigint,
@Matches int
as
begin
insert into Cricket (PlayerId,playerName,TotalRuns,MatchesPlayed)
values (@PId,@PName,@Runs,@Matches)
end

exec insertData @PId = 122,@PName = 'Vatsal',@Runs = 300,@Matches = 15

--procedure for update data into table
create procedure updateData
@Matches int = null,
@PId int,
@TRun bigint
as
begin
update cricket set TotalRuns = @TRun, MatchesPlayed = @Matches where PlayerId = @PId
end

drop procedure upadateData

exec updateData @Matches = 15,@PId = 122,@TRun = 300

--procedure for delete data into table
create procedure deleteRow
@PId int
as
begin
delete from Cricket where PlayerId = @PId
end

exec deleteRow @PId = 121


select * from Cricket
drop table Cricket


--create insert update delete in one procedure
create or alter proc insert_update_delete
@statementType nvarchar(20) = '',
@PId int = null,
@PName varchar(200) = null,
@Runs bigint = null,
@Matches int = null

as
begin
	declare @darshit varchar(50)
	set @darshit = 'Hello How Are you'
	if @statementType = 'insert'
		begin
		insert into Cricket (PlayerId,playerName,TotalRuns,MatchesPlayed)
			values (@PId,@PName,@Runs,@Matches)
		end
	
	if @statementType = 'update'
		begin
			if @PName is null
				begin
					update cricket set
					TotalRuns = @Runs, MatchesPlayed = @Matches 
					where PlayerId = @PId
				end

			if @Runs is null
				begin
					update cricket set 
					playerName = @PName, MatchesPlayed = @Matches 
					where PlayerId = @PId
				end

			if @Matches is null
				begin
					update cricket set 
					playerName = @PName, TotalRuns = @Runs
					where PlayerId = @PId
				end

			else
				begin
					update cricket set 
					playerName = @PName, TotalRuns = @Runs,MatchesPlayed = @Matches
					where PlayerId = @PId
				end
		end
		--	update Cricket 
		--	set playerName = @PName,
		--	TotalRuns = @Runs,
		--	MatchesPlayed = @Matches 
		--	where PlayerId = @PId
		--end
		
	if @statementType = 'delete'
		begin
		delete from cricket where PlayerId = @PId
		end
	print @darshit
end

exec insert_update_delete @statementType = 'update',@PId= 123, @Matches = 50,@Runs = 500,@PName = 'darshan'

select * from cricket