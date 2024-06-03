-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2023 at 03:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedules`
--

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `schedule_id` char(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(10) DEFAULT NULL,
  `schedule_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`schedule_id`, `date`, `user_id`, `schedule_name`) VALUES
('C00001', '2023-10-09 09:37:54', '0936400172', '01'),
('C00002', '2023-10-09 12:07:27', '0936400172', '02');

-- --------------------------------------------------------

--
-- Table structure for table `schedule_sec`
--

CREATE TABLE `schedule_sec` (
  `section_id` char(6) NOT NULL,
  `schedule_id` char(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule_sec`
--

INSERT INTO `schedule_sec` (`section_id`, `schedule_id`) VALUES
('S00001', 'C00002'),
('S00003', 'C00001'),
('S00003', 'C00002'),
('S00005', 'C00001'),
('S00006', 'C00002');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `section_id` char(6) NOT NULL,
  `section` char(2) NOT NULL,
  `year` char(4) NOT NULL,
  `term` int(11) NOT NULL,
  `subject_id` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`section_id`, `section`, `year`, `term`, `subject_id`) VALUES
('S00001', '01', '2563', 1, '344-001'),
('S00002', '02', '2563', 1, '344-001'),
('S00003', '01', '2563', 1, '344-002'),
('S00004', '02', '2563', 1, '344-002'),
('S00005', '01', '2563', 1, '344-003'),
('S00006', '01', '2563', 1, '344-004'),
('S00007', '01', '2563', 1, '344-005');

-- --------------------------------------------------------

--
-- Table structure for table `sec_time`
--

CREATE TABLE `sec_time` (
  `time_id` char(6) NOT NULL,
  `section_id` char(6) NOT NULL,
  `classroom` char(10) NOT NULL,
  `date` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sec_time`
--

INSERT INTO `sec_time` (`time_id`, `section_id`, `classroom`, `date`) VALUES
('T00001', 'S00001', 'cs201', 'จันทร์'),
('T00002', 'S00001', 'cs201', 'อังคาร'),
('T00003', 'S00002', 'cs201', 'อังคาร'),
('T00004', 'S00002', 'cs201', 'พุธ'),
('T00005', 'S00003', 'cs201', 'พฤหัสบดี'),
('T00006', 'S00004', 'cs201', 'ศุกร์'),
('T00007', 'S00005', 'cs201', 'เสาร์'),
('T00008', 'S00006', 'cs201', 'อังคาร'),
('T00009', 'S00007', 'cs201', 'ศุกร์');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` varchar(7) NOT NULL,
  `subject_name_th` varchar(50) NOT NULL,
  `credit` int(11) NOT NULL,
  `category` char(1) NOT NULL,
  `subject_name_eng` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_name_th`, `credit`, `category`, `subject_name_eng`) VALUES
('344-001', 'เอไอ01', 5, 'C', 'AI01'),
('344-002', 'อังกิต', 5, 'C', 'Grammar'),
('344-003', 'คณิตศาสตร์', 4, 'E', 'Math1'),
('344-004', 'คณิต2', 5, 'C', 'Math2'),
('344-005', 'Grammar', 5, 'C', 'Grammar32');

-- --------------------------------------------------------

--
-- Table structure for table `time`
--

CREATE TABLE `time` (
  `time_id` char(6) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `time`
--

INSERT INTO `time` (`time_id`, `start_time`, `end_time`) VALUES
('T00001', '08:00:00', '10:00:00'),
('T00002', '09:00:00', '10:00:00'),
('T00003', '10:00:00', '11:00:00'),
('T00004', '11:00:00', '12:00:00'),
('T00005', '09:00:00', '10:00:00'),
('T00006', '10:00:00', '11:00:00'),
('T00007', '12:00:00', '13:00:00'),
('T00008', '10:00:00', '11:00:00'),
('T00009', '10:00:00', '10:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `fname`, `lname`, `email`, `status`) VALUES
('0936400172', 'admin', '$2b$10$TCOv0qSSjTZ6O87IO8AkN.T9r0EpE6MQ5.AcLWfsQ96mYHx3fU4YK', 'admin', 'admin', 'email', 1),
('6310210644', 'user', '$2b$10$nFX.GfC50Ipy3N7Sm51zCeXgGMH6nc816AUp1oW84gfv.xb083EI.', 'user', 'cvbcvb', 'Email', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `Member_id` (`user_id`);

--
-- Indexes for table `schedule_sec`
--
ALTER TABLE `schedule_sec`
  ADD PRIMARY KEY (`section_id`,`schedule_id`),
  ADD KEY `Section_id` (`section_id`),
  ADD KEY `Schedule_id` (`schedule_id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`section_id`),
  ADD KEY `Subject_id` (`subject_id`);

--
-- Indexes for table `sec_time`
--
ALTER TABLE `sec_time`
  ADD PRIMARY KEY (`time_id`,`section_id`),
  ADD KEY `Time_id` (`time_id`),
  ADD KEY `Section_id` (`section_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`time_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `schedule_sec`
--
ALTER TABLE `schedule_sec`
  ADD CONSTRAINT `schedule_sec_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_sec_ibfk_2` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`schedule_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sec_time`
--
ALTER TABLE `sec_time`
  ADD CONSTRAINT `sec_time_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `time_id` FOREIGN KEY (`time_id`) REFERENCES `time` (`time_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
