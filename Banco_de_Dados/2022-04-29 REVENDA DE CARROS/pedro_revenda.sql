-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 10/05/2022 às 22h27min
-- Versão do Servidor: 8.0.22
-- Versão do PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `pedro_revenda`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `automovel`
--

CREATE TABLE IF NOT EXISTS `automovel` (
  `codautomovel` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(100) NOT NULL,
  `codmodelo` int NOT NULL,
  `codcategoria` int NOT NULL,
  `ano` int NOT NULL,
  `cor` varchar(50) NOT NULL,
  `placa` varchar(10) NOT NULL,
  `localizacao` varchar(50) NOT NULL,
  `tipocombustivel` varchar(50) NOT NULL,
  `opcionais` varchar(100) NOT NULL,
  `valor` float(10,2) NOT NULL,
  `foto1` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `foto2` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`codautomovel`),
  KEY `codmodelo` (`codmodelo`),
  KEY `codcategoria` (`codcategoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `automovel`
--

INSERT INTO `automovel` (`codautomovel`, `descricao`, `codmodelo`, `codcategoria`, `ano`, `cor`, `placa`, `localizacao`, `tipocombustivel`, `opcionais`, `valor`, `foto1`, `foto2`) VALUES
(4, 'ertrgedrgtht', 3, 2, 123, '123', '123', '123', '123', '123', 123.00, '../fotos/WIN_20220325_14_08_48_Pro.jpg', 'no_photo'),
(5, 'Carro 1', 1, 3, 2004, 'cinza', '456', 'Rua Etc', 'Gasolina', 'Air-Bag', 20.00, '../fotos/', '../fotos/'),
(6, 'Carro 2', 2, 4, 2007, 'preto', '789', 'Rua Tal', 'GNV', 'Air-Bag, Ar-Condicionado', 40.00, '../fotos/', '../fotos/'),
(7, 'Carro 3', 21, 4, 2016, 'marrom', '1011', 'Rua Fulano', 'Diesel', 'Air-Bag, Ar-Condicionado', 90.00, '../fotos/', '../fotos/'),
(8, 'Carro 4', 23, 9, 2020, 'prata', '11111', 'Rua Ciclano', 'Gasolina, GNV', 'Air-Bag, Ar-Condicionado, Painel de Controle, cinzeiro, bancos aquecidos, couro', 200.00, '../fotos/', '../fotos/'),
(9, 'Carro 5', 11, 8, 2022, 'amarelo', '54535', 'Rua Atirei o Pau no Gato', 'Gasolina', 'Air-Bag, Ar-Condicionado, Painel de Controle, Couro', 180.00, '../fotos/', '../fotos/');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `codcategoria` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`codcategoria`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`codcategoria`, `nome`) VALUES
(1, 'CAMINHONETE'),
(2, 'SUV'),
(3, 'SEDAN'),
(4, 'VAN'),
(6, 'PICAPE'),
(7, 'COMPACTO'),
(8, 'FAMILIAR'),
(9, 'CROSSOVER');

-- --------------------------------------------------------

--
-- Estrutura da tabela `marca`
--

CREATE TABLE IF NOT EXISTS `marca` (
  `codmarca` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`codmarca`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=7 ;

--
-- Extraindo dados da tabela `marca`
--

INSERT INTO `marca` (`codmarca`, `nome`) VALUES
(1, 'HONDA'),
(2, 'CHEVROLET'),
(3, 'VOLKSWAGGEN'),
(4, 'CAOA CHERY'),
(5, 'NISSAN'),
(6, 'FORD'),
(7, 'MERCEDES BENZ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `modelo`
--

CREATE TABLE IF NOT EXISTS `modelo` (
  `codmodelo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `codmarca` int NOT NULL,
  PRIMARY KEY (`codmodelo`),
  KEY `codmarca` (`codmarca`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=28 ;

--
-- Extraindo dados da tabela `modelo`
--

INSERT INTO `modelo` (`codmodelo`, `nome`, `codmarca`) VALUES
(1, 'CITY', 1),
(2, 'FIT', 1),
(3, 'WR-V', 1),
(4, 'HR-V', 1),
(5, 'CIVIC', 1),
(6, 'ACCORD', 1),
(7, 'CRV', 1),
(8, 'ONIX', 2),
(9, 'ONIX PLUS', 2),
(10, 'CRUZE', 2),
(11, 'CRUZE SPORT', 2),
(12, 'TRACKER', 2),
(13, 'SPIN', 2),
(14, 'SPIN ACTIV', 2),
(15, 'AMAROK', 3),
(16, 'FOX', 3),
(17, 'GOL', 3),
(18, 'JETTA', 3),
(19, 'NIVUS', 3),
(20, 'POLO', 3),
(21, 'SAVEIRO', 3),
(22, 'TIGGO 7', 4),
(23, 'ARRIZO 6', 4),
(24, 'HD80', 4),
(25, 'NEW AZERA', 4),
(26, 'ALL NEW TUCSON', 4),
(27, 'IX35', 4),
(28, 'CRETA', 4);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
