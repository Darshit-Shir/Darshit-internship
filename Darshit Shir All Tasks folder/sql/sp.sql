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


