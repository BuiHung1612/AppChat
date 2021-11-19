USE [master]
GO
/****** Object:  Database [AppChat]    Script Date: 11/19/2021 9:44:14 PM ******/
CREATE DATABASE [AppChat]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AppChat', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\AppChat.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'AppChat_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\AppChat_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [AppChat] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AppChat].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AppChat] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AppChat] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AppChat] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AppChat] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AppChat] SET ARITHABORT OFF 
GO
ALTER DATABASE [AppChat] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AppChat] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AppChat] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AppChat] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AppChat] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AppChat] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AppChat] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AppChat] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AppChat] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AppChat] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AppChat] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AppChat] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AppChat] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AppChat] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AppChat] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AppChat] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AppChat] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AppChat] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AppChat] SET  MULTI_USER 
GO
ALTER DATABASE [AppChat] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AppChat] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AppChat] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AppChat] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AppChat] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [AppChat] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [AppChat] SET QUERY_STORE = OFF
GO
USE [AppChat]
GO
/****** Object:  Table [dbo].[chatRoom]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chatRoom](
	[id_room] [nvarchar](50) NOT NULL,
	[id_messages] [nvarchar](50) NOT NULL,
	[createAt] [nvarchar](50) NULL,
	[text] [nvarchar](max) NULL,
	[user_id] [nvarchar](50) NULL,
	[user_name] [nvarchar](50) NULL,
	[avatar] [nvarchar](max) NULL,
	[image] [nvarchar](max) NULL,
 CONSTRAINT [PK_chatRoom] PRIMARY KEY CLUSTERED 
(
	[id_messages] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comments]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comments](
	[comment_id] [nvarchar](50) NOT NULL,
	[comment_image] [nvarchar](max) NULL,
	[post_id] [nvarchar](50) NULL,
	[user_id] [nvarchar](50) NULL,
	[user_name] [nvarchar](50) NULL,
	[user_image] [nvarchar](max) NULL,
	[age] [int] NULL,
	[sex] [int] NULL,
	[create_up] [nvarchar](50) NULL,
	[comment_content] [nvarchar](max) NULL,
 CONSTRAINT [PK_comments] PRIMARY KEY CLUSTERED 
(
	[comment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[friends]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[friends](
	[create_id] [nvarchar](50) NOT NULL,
	[user_id_0] [nvarchar](50) NULL,
	[user_name_0] [nvarchar](50) NULL,
	[user_img_0] [nvarchar](max) NULL,
	[user_id_1] [nvarchar](50) NULL,
	[user_name_1] [nvarchar](50) NULL,
	[user_img_1] [nvarchar](max) NULL,
	[create_up] [nvarchar](50) NULL,
	[roomChat_id] [nvarchar](50) NULL,
 CONSTRAINT [PK_friends] PRIMARY KEY CLUSTERED 
(
	[create_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[images]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[images](
	[id_image] [nvarchar](50) NOT NULL,
	[id_user] [nvarchar](50) NOT NULL,
	[type] [nvarchar](50) NOT NULL,
	[id_post] [nchar](10) NULL,
	[url] [nvarchar](max) NULL,
 CONSTRAINT [PK_images] PRIMARY KEY CLUSTERED 
(
	[id_image] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[postDetail]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[postDetail](
	[like_id] [nvarchar](50) NOT NULL,
	[post_id] [nvarchar](50) NOT NULL,
	[user_name_like] [nvarchar](50) NULL,
	[user_id_like] [nvarchar](50) NULL,
	[like_status] [nvarchar](50) NULL,
 CONSTRAINT [PK_postDetail] PRIMARY KEY CLUSTERED 
(
	[like_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[posts]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[posts](
	[post_id] [nvarchar](50) NOT NULL,
	[user_id] [nvarchar](50) NULL,
	[create_up] [nvarchar](50) NOT NULL,
	[post_content] [nvarchar](max) NULL,
	[like_number] [int] NULL,
	[comment_id] [nvarchar](max) NULL,
	[post_image] [nvarchar](max) NULL,
 CONSTRAINT [PK_posts] PRIMARY KEY CLUSTERED 
(
	[post_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[requests]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[requests](
	[id_request] [nvarchar](50) NOT NULL,
	[request_sender_id] [nvarchar](50) NULL,
	[request_sender_name] [nvarchar](50) NULL,
	[request_sender_img] [nvarchar](max) NULL,
	[status] [nvarchar](50) NULL,
	[request_receiver] [nvarchar](50) NULL,
	[create_up] [nvarchar](50) NULL,
 CONSTRAINT [PK_requests] PRIMARY KEY CLUSTERED 
(
	[id_request] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 11/19/2021 9:44:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[user_name] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[email] [nvarchar](max) NULL,
	[user_id] [nvarchar](50) NOT NULL,
	[age] [int] NULL,
	[sex] [int] NULL,
	[postsId] [nvarchar](50) NOT NULL,
	[followers] [int] NULL,
	[following] [int] NULL,
	[visited] [int] NULL,
	[description] [nvarchar](max) NULL,
	[user_image] [nvarchar](max) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'0820fd57-0e8c-4151-bd56-13efbe942293', N'2021-11-01T10:18:33.942Z', N'???', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'256087bce14546b7c91debdda30aa016c736ae5b', N'09f64e49-7db8-4565-a5f8-6918c96a18f3', N'2021-11-15T02:23:31.194Z', N'xin chao admin', N'49e5ca272237c0f56171a9433e78b9f539cdfe94', N'tientran', N'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p100x100/165248460_3089469631340389_6479264918935016281_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Z2I9vgB0uQQAX_cPsXt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-1.fna&oh=a35afb0326106484ac9e62f32e971025&oe=61A3A728', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'0a1f9058-dcee-4d0f-b5b9-68939adfe93f', N'2021-11-14T16:04:27.966Z', N'Gõ kí tự có dấu', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'0bf11b67-0c7e-48c4-bd19-21b1e411d2e0', N'2021-11-14T16:08:01.402Z', N'', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'https://i.imgur.com/hQbOyy8.jpeg')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'130c6343-aed9-404d-86ac-14008e136658', N'2021-11-14T16:07:37.870Z', N'Kí tự có dấu này đã không còn lỗi nữa', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'2919a100-e56e-4f28-a687-81b33fc90d1f', N'2021-11-01T02:37:59.757Z', N'oh thanks', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'319ebf5b-967e-4476-8b82-8ff217ff2c09', N'2021-11-01T02:37:12.924Z', N'xin chao buoi sang', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'413fd7b2-3427-4e00-8f40-a7ad61de5cb7', N'2021-11-14T15:47:55.703Z', N'alo ng ae', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'48fde3c5-c358-4b66-88df-d73bc265ccf8', N'2021-10-31T13:04:22.040Z', N'sieu cap vip pro', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'4ecff625-4a37-4700-85f9-3735f928ee9b', N'2021-10-31T13:04:31.310Z', N'', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'https://i.imgur.com/BoHG7CK.jpeg')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'591b32b4-d214-419d-953a-47f8594a1601', N'2021-11-10T13:27:46.094Z', N'', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'https://i.imgur.com/Hv2PCTU.jpeg')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'80199d02-b3c7-4690-a417-9fd15d1b0825', N'2021-11-15T10:08:27.488Z', N'xin chao', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'890a9da3-e716-4861-a5ec-b8f7c6e0d311', N'2021-11-01T10:18:59.528Z', N'hoi? lamf gif', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'a69f6238-29f0-4d81-8dbc-dee9350d1687', N'2021-11-15T10:11:42.146Z', N'Alo bùi hùng', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'b00d299c-28ed-4ce4-ab17-19b2a6b7d036', N'2021-11-01T10:12:42.575Z', N'dang lam gi the ?', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'b7fd9c45-07d7-47c8-a9be-7b198b13d9ce', N'2021-11-15T10:12:23.093Z', N'', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'https://i.imgur.com/yOyL6hK.jpeg')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'b95ab1a2-a9dc-4c50-92fb-3652b2f5efac', N'2021-11-01T10:18:52.658Z', N'??', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'c19f2b87-fe60-4e37-b7ec-5c8ea5fdb5db', N'2021-10-31T13:05:09.990Z', N'cai gi the', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'cd828fab-44d5-4bff-b002-d304f463eea5', N'2021-11-14T16:00:08.951Z', N'O sao gõ l?i sai kí t? th? này nh?', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'cef1bfb6-f54e-4238-a55b-7fe79d1e8544', N'2021-11-01T02:38:03.814Z', N'<3', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'd7cbf9ff-8c84-4cb6-9c0a-d4a15f3b12e9', N'2021-11-01T10:12:25.908Z', N'<3', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'da08097a-514e-4a70-acf4-f262868b4c3f', N'2021-11-15T10:12:01.296Z', N'cái g t', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'e29f92cd-55b8-43b5-b150-7ad917499ff6', N'2021-11-15T02:25:55.605Z', N'Đang làm gì thế', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'eb4a7bbc-f0dc-4330-beae-9ae1cc93e436', N'2021-11-01T02:37:36.727Z', N'chuc hung có 1 tuan lam viec vui ve', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'f62e1fbf-6afe-44f9-8c43-888717382fdb', N'2021-11-15T02:25:47.676Z', N'Xin chào admin', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', N'')
INSERT [dbo].[chatRoom] ([id_room], [id_messages], [createAt], [text], [user_id], [user_name], [avatar], [image]) VALUES (N'7faf2d3af821936085e15fcd4383c2d3ef2c8831', N'f686b8c9-072d-45f9-be7e-d0a22cba358e', N'2021-11-14T15:48:03.264Z', N'Gì th?', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'')
GO
INSERT [dbo].[friends] ([create_id], [user_id_0], [user_name_0], [user_img_0], [user_id_1], [user_name_1], [user_img_1], [create_up], [roomChat_id]) VALUES (N'956d79f312d81a99bb9fb53d285a24306dc704c7', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.imgur.com/mdTu7SI.jpeg', N'49e5ca272237c0f56171a9433e78b9f539cdfe94', N'tientran', N'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p100x100/165248460_3089469631340389_6479264918935016281_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Z2I9vgB0uQQAX_cPsXt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-1.fna&oh=a35afb0326106484ac9e62f32e971025&oe=61A3A728', NULL, N'256087bce14546b7c91debdda30aa016c736ae5b')
INSERT [dbo].[friends] ([create_id], [user_id_0], [user_name_0], [user_img_0], [user_id_1], [user_name_1], [user_img_1], [create_up], [roomChat_id]) VALUES (N'cb010695ee1f1355e1780f251631ce7a70a85d1a', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'admin', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'buihung', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607', NULL, N'7faf2d3af821936085e15fcd4383c2d3ef2c8831')
GO
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'17336ed0e076268595b3186c2811d1a0ac162a23', N'b81041f261647afc01c07402a1ca94b5bafc58c4', N'avatar', N'          ', N'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-1/p320x320/125432401_2708314509459742_6680091156490990794_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=RsodkEvi9s8AX8xVz11&_nc_ht=scontent-sin6-4.xx&oh=01476f4c18f53553fd40cc92edc4a4e4&oe=61B74DB7')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'3c21fa75a38f3d021f0ed265d2d2c4ad4dd9376b', N'ccf9606503c38ab577971124393f6dd3a42ccad0', N'avatar', N'          ', N'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/138477898_721915872096120_2037344278723994657_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DrP2ErZI8okAX8AOGRl&_nc_ht=scontent-sin6-3.xx&oh=ac34ba6d0c5f4b5dd394152489107b2c&oe=61B5D88D')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'56020ce6270575b8dadc735d20ae3eac367baa13', N'49e5ca272237c0f56171a9433e78b9f539cdfe94', N'avatar', N'          ', N'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p100x100/165248460_3089469631340389_6479264918935016281_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Z2I9vgB0uQQAX_cPsXt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-1.fna&oh=a35afb0326106484ac9e62f32e971025&oe=61A3A728')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'5b5bf55e9e6f6963d9b0fefb643b56815a68e856', N'769e671a2d5535be41457abf2ba2c59c23357431', N'avatar', N'          ', N'https://scontent-sin6-2.xx.fbcdn.net/v/t1.18169-9/28166643_1978346919094000_6393974893054744415_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6stulYiczkQAX8FTxxC&_nc_ht=scontent-sin6-2.xx&oh=7b1298774849ccc0b2fd05692b6042fa&oe=61B74018')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'7370bf0cb32aa8271b367e89fe00d73a3d22c7b6', N'456043b563ba3981c99fb2e4dfe025996af66d2b', N'avatar', N'          ', N'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/134644900_1297041047340798_5434128991436869029_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvaIPfn4nVEAX_zLexd&_nc_ht=scontent-sin6-3.xx&oh=a36e20e794fe12e641e2dd02da0b773c&oe=61B79513')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'8f9410bc8a3a49bd53bbdfc1c2599e3c21cd958d', N'2a103ea9686afb2b1f5b7047c8d4392f93cafbdd', N'avatar', N'          ', N'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-1/s320x320/244545424_1493712500991662_5034602279261405709_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XK3BLA53NqIAX8spSGk&_nc_ht=scontent.fhan3-4.fna&oh=f4d3da572ad926a48d2f0be4c8bae738&oe=61A17B2D')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'b551715f1f306ac089046ad19c96375086f0b180', N'fdc7f75a56ea9206a9efbc163afac4e0b9b70ca6', N'avatar', N'          ', N'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/175878519_1116634442136154_8811505064478318652_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=frkdzZ90al8AX-UjZYF&_nc_ht=scontent-sin6-1.xx&oh=8501d3c6f9ed757a966c1d547bb3e388&oe=61B49058')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'c08d28d4085d9fe671b3f4f698ecb058c68118ea', N'fcb60e4ff4463c46f4ecf7d04b8a6c5a950dc9d3', N'avatar', N'          ', N'https://i.pinimg.com/236x/dd/1b/af/dd1baff67c1cdaf53b151468aab1516c.jpg')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'c826e91b5330ebe4b58d34d6a6def0e5f1bc00ca', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'avatar', N'          ', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'caeb657dfbff82fee2463bc8219863148f1c3a95', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'avatar', N'          ', N'https://i.pinimg.com/236x/64/08/33/640833bfd18b29e4582e2ab861c45658.jpg')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'cffaf86c0bdf488af0069a58dfe4ea80cc836e9e', N'737ad57e1af744360f41cc25a4013adc71107928', N'avatar', N'          ', N'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/36554238_2056099221309653_8250603094392438784_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7hk0DLPcMoYAX9D7zt_&_nc_ht=scontent-sin6-1.xx&oh=04420c80be595a1b05d3d7de36346408&oe=61B79425')
INSERT [dbo].[images] ([id_image], [id_user], [type], [id_post], [url]) VALUES (N'fe0c0186eb3d11a62849fd83a51a180799238b9b', N'a19582a7903a6ae7c05ae7288d9fc837d6470b5d', N'avatar', N'          ', N'https://i.pinimg.com/236x/dd/1b/af/dd1baff67c1cdaf53b151468aab1516c.jpg')
GO
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'638dd98161c75ea9cc9f3d004db1388180d58cbe', N'93ad5fb438d4d36ac1e1b0027e3bd52fbb1fbc67', N'admin', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'8bce14a6e816bf16484bf86e81702060f6118e35', N'39dbdc7d29250a91166f0b707eb75651dd70a19a', N'admin', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'8fc94ae4655b2194d0935214e6e4783ef9ccf749', N'ae58ca9c65d2216aaa78aabbb8f2ea9c2f911881', N'thinhtran', N'769e671a2d5535be41457abf2ba2c59c23357431', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'9d2aabce00e704415e2b65666f828fc47b45b9ff', N'39dbdc7d29250a91166f0b707eb75651dd70a19a', N'thuybui99', N'b81041f261647afc01c07402a1ca94b5bafc58c4', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'a5e7e9dcf79a1ad0684628f0d42de8eaf2314019', N'e9630873ee36b80bd5ba53867a98e8d9fd47501f', N'buihung', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'afc7fce83596afe2cffe55bcdda4e69b2e39823e', N'95bbd6ce88494aac044d38bdb6ca329921a574a6', N'buihung', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'b9ce8e969203d48a649eb0be598d1e36e696a186', N'a517528656a6dd318450f853e287cfb3fa72070c', N'admin', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'c8a68186f06cfae3d8e15a6c9706e5e69a3f3649', N'2646eeb187b34bcf275b7ad7cc89edcfeaef658b', N'admin', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'true')
INSERT [dbo].[postDetail] ([like_id], [post_id], [user_name_like], [user_id_like], [like_status]) VALUES (N'e603b21edc5ec5e78ec3d210da7acc30be9d6ef3', N'ae58ca9c65d2216aaa78aabbb8f2ea9c2f911881', N'admin', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'true')
GO
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'2646eeb187b34bcf275b7ad7cc89edcfeaef658b', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'Mon, 15 Nov 2021 02:35:41 GMT', N'', 1, N'ce941d403c', N'https://i.imgur.com/ERKDiKD.png')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'39dbdc7d29250a91166f0b707eb75651dd70a19a', N'b81041f261647afc01c07402a1ca94b5bafc58c4', N'Sun, 14 Nov 2021 10:01:50 GMT', N'I rarely go out with people', 2, N'b81041f261', N'https://i.imgur.com/BvvqbNi.jpeg')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'93ad5fb438d4d36ac1e1b0027e3bd52fbb1fbc67', N'769e671a2d5535be41457abf2ba2c59c23357431', N'Sun, 14 Nov 2021 14:18:16 GMT', N'lien hoan cung gia dinh', 2, N'769e671a2d', N'https://i.imgur.com/1lpSlQy.jpeg')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'95bbd6ce88494aac044d38bdb6ca329921a574a6', N'769e671a2d5535be41457abf2ba2c59c23357431', N'Sun, 14 Nov 2021 14:16:48 GMT', N'7 years old', 1, N'769e671a2d', N'https://i.imgur.com/Z7SAFjt.jpeg')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'a517528656a6dd318450f853e287cfb3fa72070c', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'Mon, 01 Nov 2021 10:19:59 GMT', N'mua dong nam do', 1, N'ce941d403c', N'https://i.imgur.com/ddioayA.jpeg')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'ae58ca9c65d2216aaa78aabbb8f2ea9c2f911881', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', N'Mon, 01 Nov 2021 09:57:58 GMT', N'gui van ban', 4, N'ce941d403c', N'https://i.imgur.com/OyQzQZU.jpeg')
INSERT [dbo].[posts] ([post_id], [user_id], [create_up], [post_content], [like_number], [comment_id], [post_image]) VALUES (N'e9630873ee36b80bd5ba53867a98e8d9fd47501f', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', N'Sun, 14 Nov 2021 14:02:17 GMT', N'song qua mon chang de dang', 1, N'bd5e1589c6', N'https://i.imgur.com/6OXYcUN.png')
GO
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'thu2k', N'thu', N'thu@gmail.com', N'2a103ea9686afb2b1f5b7047c8d4392f93cafbdd', 21, 0, N'2a103ea968', 0, 0, 0, N'', N'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-1/s320x320/244545424_1493712500991662_5034602279261405709_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XK3BLA53NqIAX8spSGk&_nc_ht=scontent.fhan3-4.fna&oh=f4d3da572ad926a48d2f0be4c8bae738&oe=61A17B2D')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'Namchu', N'admin', N'namchu@gmail.com', N'456043b563ba3981c99fb2e4dfe025996af66d2b', 21, 0, N'456043b563', 0, 0, 0, N'', N'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/134644900_1297041047340798_5434128991436869029_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hvaIPfn4nVEAX_zLexd&_nc_ht=scontent-sin6-3.xx&oh=a36e20e794fe12e641e2dd02da0b773c&oe=61B79513')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'tientran', N'tientran', N'tientran@gmail.com', N'49e5ca272237c0f56171a9433e78b9f539cdfe94', 0, 0, N'49e5ca2722', 0, 0, 0, N'', N'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p100x100/165248460_3089469631340389_6479264918935016281_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Z2I9vgB0uQQAX_cPsXt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-1.fna&oh=a35afb0326106484ac9e62f32e971025&oe=61A3A728')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'tannguyen', N'admin', N'tan@gmail.com', N'737ad57e1af744360f41cc25a4013adc71107928', 0, 0, N'737ad57e1a', 0, 0, 0, N'', N'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/36554238_2056099221309653_8250603094392438784_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7hk0DLPcMoYAX9D7zt_&_nc_ht=scontent-sin6-1.xx&oh=04420c80be595a1b05d3d7de36346408&oe=61B79425')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'thinhtran', N'admin', N'thinhtran@gmail.com', N'769e671a2d5535be41457abf2ba2c59c23357431', 0, 0, N'769e671a2d', 0, 0, 0, N'', N'https://scontent-sin6-2.xx.fbcdn.net/v/t1.18169-9/28166643_1978346919094000_6393974893054744415_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6stulYiczkQAX8FTxxC&_nc_ht=scontent-sin6-2.xx&oh=7b1298774849ccc0b2fd05692b6042fa&oe=61B74018')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'taikhoan1', N'admin', N'tk1@gmail.com', N'a19582a7903a6ae7c05ae7288d9fc837d6470b5d', 0, 0, N'a19582a790', 0, 0, 0, N'', N'https://i.pinimg.com/236x/dd/1b/af/dd1baff67c1cdaf53b151468aab1516c.jpg')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'thuybui99', N'admin', N'thuybui@gmail.com', N'b81041f261647afc01c07402a1ca94b5bafc58c4', 0, 0, N'b81041f261', 0, 0, 0, N'', N'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-1/p320x320/125432401_2708314509459742_6680091156490990794_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=RsodkEvi9s8AX8xVz11&_nc_ht=scontent-sin6-4.xx&oh=01476f4c18f53553fd40cc92edc4a4e4&oe=61B74DB7')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'buihung', N'admin', N'buihung@fmail.com', N'bd5e1589c63620f3a05daa8c2f17df8896dcc5d5', 0, 0, N'bd5e1589c6', 0, 0, 0, N'', N'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=la9h43b3zj0AX_SY-xe&_nc_ht=scontent.fhan5-8.fna&oh=73414e62d2d9374a4ee4e7218218d527&oe=61A43607')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'phuongng', N'admin', N'phuongng@gmail.com', N'ccf9606503c38ab577971124393f6dd3a42ccad0', 0, 0, N'ccf9606503', 0, 0, 0, N'', N'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/138477898_721915872096120_2037344278723994657_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DrP2ErZI8okAX8AOGRl&_nc_ht=scontent-sin6-3.xx&oh=ac34ba6d0c5f4b5dd394152489107b2c&oe=61B5D88D')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'admin', N'admin', N'admin@gmail.com', N'ce941d403c52a145bb4710f31cfa4ca4968306cc', 0, 0, N'ce941d403c', 0, 0, 0, N'', N'https://i.imgur.com/mdTu7SI.jpeg')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'Anh Tuan Pat Pham', N'admin', N'tuanpat@gmail.com', N'fcb60e4ff4463c46f4ecf7d04b8a6c5a950dc9d3', 0, 0, N'fcb60e4ff4', 0, 0, 0, N'', N'https://scontent-sin6-2.xx.fbcdn.net/v/t1.18169-9/12715785_1652194721697951_4300978997608792976_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iRawpNrOZvQAX-GLJv-&_nc_ht=scontent-sin6-2.xx&oh=3094749f296a9b7e62cad6af262add92&oe=61B53EE4')
INSERT [dbo].[users] ([user_name], [password], [email], [user_id], [age], [sex], [postsId], [followers], [following], [visited], [description], [user_image]) VALUES (N'NamTo', N'admin', N'Namt@gmail.com', N'fdc7f75a56ea9206a9efbc163afac4e0b9b70ca6', 0, 0, N'fdc7f75a56', 0, 0, 0, N'', N'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/175878519_1116634442136154_8811505064478318652_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=frkdzZ90al8AX-UjZYF&_nc_ht=scontent-sin6-1.xx&oh=8501d3c6f9ed757a966c1d547bb3e388&oe=61B49058')
GO
ALTER TABLE [dbo].[chatRoom]  WITH CHECK ADD  CONSTRAINT [FK_chatRoom_users] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[chatRoom] CHECK CONSTRAINT [FK_chatRoom_users]
GO
ALTER TABLE [dbo].[comments]  WITH CHECK ADD  CONSTRAINT [FK_comments_posts] FOREIGN KEY([post_id])
REFERENCES [dbo].[posts] ([post_id])
GO
ALTER TABLE [dbo].[comments] CHECK CONSTRAINT [FK_comments_posts]
GO
ALTER TABLE [dbo].[comments]  WITH CHECK ADD  CONSTRAINT [FK_comments_users] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[comments] CHECK CONSTRAINT [FK_comments_users]
GO
ALTER TABLE [dbo].[friends]  WITH CHECK ADD  CONSTRAINT [FK_friends_users] FOREIGN KEY([user_id_0])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[friends] CHECK CONSTRAINT [FK_friends_users]
GO
ALTER TABLE [dbo].[images]  WITH CHECK ADD  CONSTRAINT [FK_images_users] FOREIGN KEY([id_user])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[images] CHECK CONSTRAINT [FK_images_users]
GO
ALTER TABLE [dbo].[postDetail]  WITH CHECK ADD  CONSTRAINT [FK_postDetail_posts] FOREIGN KEY([post_id])
REFERENCES [dbo].[posts] ([post_id])
GO
ALTER TABLE [dbo].[postDetail] CHECK CONSTRAINT [FK_postDetail_posts]
GO
ALTER TABLE [dbo].[posts]  WITH CHECK ADD  CONSTRAINT [FK_posts_users] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[posts] CHECK CONSTRAINT [FK_posts_users]
GO
ALTER TABLE [dbo].[requests]  WITH CHECK ADD  CONSTRAINT [FK_requests_users] FOREIGN KEY([request_sender_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[requests] CHECK CONSTRAINT [FK_requests_users]
GO
USE [master]
GO
ALTER DATABASE [AppChat] SET  READ_WRITE 
GO
