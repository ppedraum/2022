-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 10/06/2022 às 22h22min
-- Versão do Servidor: 8.0.22
-- Versão do PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `pong`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `area_atuacao`
--

CREATE TABLE IF NOT EXISTS `area_atuacao` (
  `id` int NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(144) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `area_atuacao`
--

INSERT INTO `area_atuacao` (`id`, `titulo`, `descricao`) VALUES
(1, 'CAPACITACAO PROFISSIONAL', 'Ajudar pessoas a se formarem por cursos gratuitos ou com bolsas parciais/integrais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo_voluntario`
--

CREATE TABLE IF NOT EXISTS `cargo_voluntario` (
  `id` int NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(144) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE IF NOT EXISTS `evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_evento` varchar(50) NOT NULL,
  `endereco` varchar(144) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `hor_inicio` time NOT NULL,
  `hor_fim` time NOT NULL,
  `datetime_pubicacao` datetime NOT NULL,
  `is_terminado` tinyint(1) DEFAULT NULL,
  `foto` mediumblob NOT NULL,
  `id_ONG` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ONG` (`id_ONG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto_ong`
--

CREATE TABLE IF NOT EXISTS `foto_ong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `foto` mediumblob NOT NULL,
  `descricao` varchar(144) NOT NULL,
  `id_ONG` int NOT NULL,
  PRIMARY KEY (`id`,`id_ONG`),
  KEY `id_ONG` (`id_ONG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto_publicacao`
--

CREATE TABLE IF NOT EXISTS `foto_publicacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `foto` mediumblob NOT NULL,
  `descricao` varchar(144) NOT NULL,
  `id_publicacao` int NOT NULL,
  PRIMARY KEY (`id`,`id_publicacao`),
  KEY `id_publicacao` (`id_publicacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inscricao`
--

CREATE TABLE IF NOT EXISTS `inscricao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_evento` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_evento` (`id_evento`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ong`
--

CREATE TABLE IF NOT EXISTS `ong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `CNPJ` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `nome` varchar(144) NOT NULL,
  `nome_fantasia` varchar(144) NOT NULL,
  `sede` varchar(144) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `UF` char(2) NOT NULL,
  `CEP` varchar(9) NOT NULL,
  `telefone` varchar(21) NOT NULL,
  `data_abertura` date NOT NULL,
  `id_area_atuacao` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_area_atuacao` (`id_area_atuacao`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

--
-- Extraindo dados da tabela `ong`
--

INSERT INTO `ong` (`id`, `CNPJ`, `login`, `senha`, `nome`, `nome_fantasia`, `sede`, `cidade`, `UF`, `CEP`, `telefone`, `data_abertura`, `id_area_atuacao`) VALUES
(1, '83.649.830/0001-71', 'satc-admin', 'satc123', 'ASSOCIACAO BENEFICENTE DA INDUSTRIA CARBONIFERA DE SANTA CATARINA', 'SATC', 'Rua Pascoal Meller, 73', 'Criciúma', 'SC', '88805-380', '+55 (48) 3431-7568', '2022-03-21', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `publicacao`
--

CREATE TABLE IF NOT EXISTS `publicacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `qtd_likes` int NOT NULL,
  `qtd_compartilhamentos` int NOT NULL,
  `datetime_publicacao` datetime NOT NULL,
  `tipo_publicacao` varchar(16) NOT NULL,
  `id_ONG` int NOT NULL,
  `id_evento` int DEFAULT NULL,
  `id_req_voluntariado` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ONG` (`id_ONG`),
  KEY `id_evento` (`id_evento`),
  KEY `id_req_voluntariado` (`id_req_voluntariado`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

--
-- Extraindo dados da tabela `publicacao`
--

INSERT INTO `publicacao` (`id`, `titulo`, `descricao`, `qtd_likes`, `qtd_compartilhamentos`, `datetime_publicacao`, `tipo_publicacao`, `id_ONG`, `id_evento`, `id_req_voluntariado`) VALUES
(1, 'Teste de Publicação', 'Isso é um teste.', 0, 0, '2022-06-10 17:05:00', 'TESTE DEBUG', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `requisicao_voluntariado`
--

CREATE TABLE IF NOT EXISTS `requisicao_voluntariado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qtd_requisicoes` int NOT NULL,
  `datetime_publicacao` datetime NOT NULL,
  `qtd_requisicoes_preenchidas` int NOT NULL,
  `qtd_requisicoes_vagas` int NOT NULL,
  `is_terminado` tinyint(1) NOT NULL,
  `id_cargo_voluntario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cargo_voluntario` (`id_cargo_voluntario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(144) NOT NULL,
  `e_mail` varchar(144) NOT NULL,
  `telefone` varchar(21) NOT NULL,
  `data_nasc` date NOT NULL,
  `sexo` char(4) NOT NULL,
  `profissao` varchar(144) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `foto_perfil` blob,
  `is_voluntario` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `voluntario`
--

CREATE TABLE IF NOT EXISTS `voluntario` (
  `id_cargo_voluntario` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_cargo_voluntario`,`id_usuario`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Restrições para as tabelas dumpadas
--

--
-- Restrições para a tabela `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`);

--
-- Restrições para a tabela `foto_ong`
--
ALTER TABLE `foto_ong`
  ADD CONSTRAINT `foto_ong_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`);

--
-- Restrições para a tabela `foto_publicacao`
--
ALTER TABLE `foto_publicacao`
  ADD CONSTRAINT `foto_publicacao_ibfk_1` FOREIGN KEY (`id_publicacao`) REFERENCES `publicacao` (`id`);

--
-- Restrições para a tabela `inscricao`
--
ALTER TABLE `inscricao`
  ADD CONSTRAINT `inscricao_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`),
  ADD CONSTRAINT `inscricao_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

--
-- Restrições para a tabela `ong`
--
ALTER TABLE `ong`
  ADD CONSTRAINT `ong_ibfk_1` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`),
  ADD CONSTRAINT `ong_ibfk_2` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`),
  ADD CONSTRAINT `ong_ibfk_3` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`);

--
-- Restrições para a tabela `publicacao`
--
ALTER TABLE `publicacao`
  ADD CONSTRAINT `publicacao_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`),
  ADD CONSTRAINT `publicacao_ibfk_2` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`),
  ADD CONSTRAINT `publicacao_ibfk_3` FOREIGN KEY (`id_req_voluntariado`) REFERENCES `requisicao_voluntariado` (`id`);

--
-- Restrições para a tabela `requisicao_voluntariado`
--
ALTER TABLE `requisicao_voluntariado`
  ADD CONSTRAINT `requisicao_voluntariado_ibfk_1` FOREIGN KEY (`id_cargo_voluntario`) REFERENCES `cargo_voluntario` (`id`),
  ADD CONSTRAINT `chk_requisicoes` CHECK ((`qtd_requisicoes` = (`qtd_requisicoes_preenchidas` + `qtd_requisicoes_vagas`)));

--
-- Restrições para a tabela `voluntario`
--
ALTER TABLE `voluntario`
  ADD CONSTRAINT `voluntario_ibfk_1` FOREIGN KEY (`id_cargo_voluntario`) REFERENCES `cargo_voluntario` (`id`),
  ADD CONSTRAINT `voluntario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
