-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 23 Lut 2020, 16:53
-- Wersja serwera: 10.1.38-MariaDB
-- Wersja PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `gamebets`
--
CREATE DATABASE IF NOT EXISTS `gamebets` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gamebets`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bets`
--

CREATE TABLE `bets` (
  `id_b` int(11) NOT NULL,
  `id_g` int(11) NOT NULL,
  `pick` int(11) NOT NULL,
  `win` int(1) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bets`
--

INSERT INTO `bets` (`id_b`, `id_g`, `pick`, `win`, `value`) VALUES
(1, 2, 31, 1, 100),
(2, 2, 49, 0, 10),
(3, 2, 49, 0, 8),
(4, 2, 49, 0, 8),
(5, 2, 49, 0, 99),
(6, 1, 44, 0, 5),
(7, 1, 1, 0, 6),
(8, 1, 44, 0, 6),
(9, 1, 44, 0, 6),
(10, 1, 44, 0, 6),
(11, 1, 44, 0, 1),
(12, 1, 44, 0, 5),
(13, 1, 44, 0, 5),
(14, 1, 44, 0, 2),
(15, 1, 44, 0, 71),
(16, 2, 49, 0, 6),
(17, 1, 44, 0, 6),
(18, 1, 0, 0, 1),
(19, 2, 49, 0, 15),
(20, 2, 49, 0, 5),
(21, 2, 31, 0, 6),
(22, 1, 44, 0, 5),
(23, 2, 49, 0, 8),
(24, 2, 31, 0, 78),
(25, 2, 49, 0, 50);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `games`
--

CREATE TABLE `games` (
  `id_g` int(11) NOT NULL,
  `id_t1` int(11) NOT NULL,
  `id_t2` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `score_t1` int(11) DEFAULT NULL,
  `score_t2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `games`
--

INSERT INTO `games` (`id_g`, `id_t1`, `id_t2`, `date`, `score_t1`, `score_t2`) VALUES
(1, 1, 44, '2021-02-19 00:00:00', 1, 16),
(2, 31, 49, '2020-02-03 00:00:00', 6, 16);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teams`
--

CREATE TABLE `teams` (
  `id_t` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo_url` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `teams`
--

INSERT INTO `teams` (`id_t`, `name`, `logo_url`) VALUES
(1, 'Virtus.pro', 'https://vignette.wikia.nocookie.net/counter-strike-global-offensive/images/0/05/Virtus.pro_-_logo.png/revision/latest/scale-to-width-down/340?cb=20190122162926&path-prefix=pl'),
(31, 'Faze Clan', 'https://gtalogo.com/img/6737.webp'),
(37, 'SK Gaming', 'https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/4/4f/SK_Gaminglogo_square.png/1200px-SK_Gaminglogo_square.png'),
(44, 'Fnatic', 'https://vignette.wikia.nocookie.net/counter-strike-global-offensive/images/f/fc/Fnatic_-_logo.png/revision/latest/scale-to-width-down/340?cb=20150727172353&path-prefix=pl'),
(49, 'AGO Gaming', 'https://cybersport.pl/wp-content/uploads/2018/02/ago_new2018.png'),
(50, 'BIG', 'https://stat1-mlycdn-test.bmyy520.com/csgo/Content/images/uploaded/team/223db461-9c6e-4094-a0d2-c38a8717fe9a.png'),
(51, 'Na\'Vi', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png'),
(52, 'Liquid', 'https://cybersport.pl/wp-content/uploads/2019/07/liquid2019_logo.png'),
(53, 'HellRaisers', 'https://static.hltv.org/images/team/logo/5310');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `bets`
--
ALTER TABLE `bets`
  ADD PRIMARY KEY (`id_b`);

--
-- Indeksy dla tabeli `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id_g`);

--
-- Indeksy dla tabeli `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id_t`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `bets`
--
ALTER TABLE `bets`
  MODIFY `id_b` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT dla tabeli `games`
--
ALTER TABLE `games`
  MODIFY `id_g` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `teams`
--
ALTER TABLE `teams`
  MODIFY `id_t` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
