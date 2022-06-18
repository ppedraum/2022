-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Jun-2022 às 20:53
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pong`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `area_atuacao`
--

CREATE TABLE `area_atuacao` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `area_atuacao`
--

INSERT INTO `area_atuacao` (`id`, `titulo`, `descricao`) VALUES
(1, 'CAPACITACAO PROFISSIONAL', 'Ajudar pessoas a se formarem por cursos gratuitos ou com bolsas parciais/integrais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo_voluntario`
--

CREATE TABLE `cargo_voluntario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id` int(11) NOT NULL,
  `endereco` varchar(144) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `UF` char(2) NOT NULL,
  `datetime_inicio` datetime NOT NULL,
  `datetime_fim` datetime NOT NULL,
  `datetime_pubicacao` datetime NOT NULL,
  `is_terminado` tinyint(1) DEFAULT NULL,
  `foto` mediumblob NOT NULL,
  `id_ONG` int(11) NOT NULL,
  `id_tipo_evento` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto_ong`
--

CREATE TABLE `foto_ong` (
  `id` int(11) NOT NULL,
  `foto` mediumblob NOT NULL,
  `descricao` varchar(144) NOT NULL,
  `id_ONG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto_publicacao`
--

CREATE TABLE `foto_publicacao` (
  `id` int(11) NOT NULL,
  `foto` mediumblob NOT NULL,
  `descricao` varchar(144) NOT NULL,
  `id_publicacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inscricao`
--

CREATE TABLE `inscricao` (
  `id` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ong`
--

CREATE TABLE `ong` (
  `id` int(11) NOT NULL,
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
  `id_area_atuacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `ong`
--

INSERT INTO `ong` (`id`, `CNPJ`, `login`, `senha`, `nome`, `nome_fantasia`, `sede`, `cidade`, `UF`, `CEP`, `telefone`, `data_abertura`, `id_area_atuacao`) VALUES
(1, '83.649.830/0001-71', 'satc-admin', 'satc123', 'ASSOCIACAO BENEFICENTE DA INDUSTRIA CARBONIFERA DE SANTA CATARINA', 'SATC', 'Rua Pascoal Meller, 73', 'Criciúma', 'SC', '88805-380', '+55 (48) 3431-7568', '2022-03-21', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `publicacao`
--

CREATE TABLE `publicacao` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `qtd_likes` int(11) NOT NULL,
  `qtd_compartilhamentos` int(11) NOT NULL,
  `datetime_publicacao` datetime NOT NULL,
  `tipo_publicacao` varchar(16) NOT NULL,
  `id_ONG` int(11) NOT NULL,
  `id_evento` int(11) DEFAULT NULL,
  `id_req_voluntariado` int(11) DEFAULT NULL
) ;

--
-- Extraindo dados da tabela `publicacao`
--

INSERT INTO `publicacao` (`id`, `titulo`, `descricao`, `qtd_likes`, `qtd_compartilhamentos`, `datetime_publicacao`, `tipo_publicacao`, `id_ONG`, `id_evento`, `id_req_voluntariado`) VALUES
(1, 'Teste de Publicação', 'Isso é um teste.', 0, 0, '2022-06-10 17:05:00', 'TESTE DEBUG', 1, NULL, NULL),
(2, 'Teste 2', 'Um outro teste', 0, 0, '2022-09-15 18:18:00', 'TESTE DEBUG', 1, NULL, NULL),
(3, 'Olá Mundo!', 'Essa é minha publicação.', 0, 0, '2022-06-18 14:55:38', 'PUBLICACAO', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `requisicao_voluntariado`
--

CREATE TABLE `requisicao_voluntariado` (
  `id` int(11) NOT NULL,
  `qtd_requisicoes` int(11) NOT NULL,
  `datetime_publicacao` datetime NOT NULL,
  `qtd_requisicoes_preenchidas` int(11) NOT NULL,
  `qtd_requisicoes_vagas` int(11) NOT NULL,
  `is_terminado` tinyint(1) NOT NULL,
  `id_cargo_voluntario` int(11) NOT NULL
) ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_evento`
--

CREATE TABLE `tipo_evento` (
  `id` int(3) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_evento`
--

INSERT INTO `tipo_evento` (`id`, `titulo`) VALUES
(1, 'JOGOS, BINGOS, GINCANAS SOLIDÁRIAS'),
(2, 'BRECHÓS, VENDAS, LEILÕES'),
(3, 'PROTESTOS, MANIFESTAÇÕES'),
(4, 'EVENTOS CULTURAIS');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_publicacao`
--

CREATE TABLE `tipo_publicacao` (
  `id` int(5) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_publicacao`
--

INSERT INTO `tipo_publicacao` (`id`, `titulo`, `descricao`) VALUES
(1, 'TESTE DEBUG', 'Apenas um teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(144) NOT NULL,
  `e_mail` varchar(144) NOT NULL,
  `telefone` varchar(21) NOT NULL,
  `data_nasc` date NOT NULL,
  `sexo` char(4) NOT NULL,
  `profissao` varchar(144) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `foto_perfil` blob DEFAULT NULL,
  `is_voluntario` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `voluntario`
--

CREATE TABLE `voluntario` (
  `id_cargo_voluntario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `area_atuacao`
--
ALTER TABLE `area_atuacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `cargo_voluntario`
--
ALTER TABLE `cargo_voluntario`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ONG` (`id_ONG`),
  ADD KEY `id_tipo_evento` (`id_tipo_evento`);

--
-- Índices para tabela `foto_ong`
--
ALTER TABLE `foto_ong`
  ADD PRIMARY KEY (`id`,`id_ONG`),
  ADD KEY `id_ONG` (`id_ONG`);

--
-- Índices para tabela `foto_publicacao`
--
ALTER TABLE `foto_publicacao`
  ADD PRIMARY KEY (`id`,`id_publicacao`),
  ADD KEY `id_publicacao` (`id_publicacao`);

--
-- Índices para tabela `inscricao`
--
ALTER TABLE `inscricao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `ong`
--
ALTER TABLE `ong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_area_atuacao` (`id_area_atuacao`);

--
-- Índices para tabela `publicacao`
--
ALTER TABLE `publicacao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ONG` (`id_ONG`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_req_voluntariado` (`id_req_voluntariado`);

--
-- Índices para tabela `requisicao_voluntariado`
--
ALTER TABLE `requisicao_voluntariado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cargo_voluntario` (`id_cargo_voluntario`);

--
-- Índices para tabela `tipo_evento`
--
ALTER TABLE `tipo_evento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_publicacao`
--
ALTER TABLE `tipo_publicacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `voluntario`
--
ALTER TABLE `voluntario`
  ADD PRIMARY KEY (`id_cargo_voluntario`,`id_usuario`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `foto_ong`
--
ALTER TABLE `foto_ong`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `foto_publicacao`
--
ALTER TABLE `foto_publicacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `inscricao`
--
ALTER TABLE `inscricao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ong`
--
ALTER TABLE `ong`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `publicacao`
--
ALTER TABLE `publicacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `requisicao_voluntariado`
--
ALTER TABLE `requisicao_voluntariado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipo_evento`
--
ALTER TABLE `tipo_evento`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tipo_publicacao`
--
ALTER TABLE `tipo_publicacao`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`),
  ADD CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`id_tipo_evento`) REFERENCES `evento` (`id`);

--
-- Limitadores para a tabela `foto_ong`
--
ALTER TABLE `foto_ong`
  ADD CONSTRAINT `foto_ong_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`);

--
-- Limitadores para a tabela `foto_publicacao`
--
ALTER TABLE `foto_publicacao`
  ADD CONSTRAINT `foto_publicacao_ibfk_1` FOREIGN KEY (`id_publicacao`) REFERENCES `publicacao` (`id`);

--
-- Limitadores para a tabela `inscricao`
--
ALTER TABLE `inscricao`
  ADD CONSTRAINT `inscricao_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`),
  ADD CONSTRAINT `inscricao_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

--
-- Limitadores para a tabela `ong`
--
ALTER TABLE `ong`
  ADD CONSTRAINT `ong_ibfk_1` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`),
  ADD CONSTRAINT `ong_ibfk_2` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`),
  ADD CONSTRAINT `ong_ibfk_3` FOREIGN KEY (`id_area_atuacao`) REFERENCES `area_atuacao` (`id`);

--
-- Limitadores para a tabela `publicacao`
--
ALTER TABLE `publicacao`
  ADD CONSTRAINT `publicacao_ibfk_1` FOREIGN KEY (`id_ONG`) REFERENCES `ong` (`id`),
  ADD CONSTRAINT `publicacao_ibfk_2` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`),
  ADD CONSTRAINT `publicacao_ibfk_3` FOREIGN KEY (`id_req_voluntariado`) REFERENCES `requisicao_voluntariado` (`id`);

--
-- Limitadores para a tabela `requisicao_voluntariado`
--
ALTER TABLE `requisicao_voluntariado`
  ADD CONSTRAINT `requisicao_voluntariado_ibfk_1` FOREIGN KEY (`id_cargo_voluntario`) REFERENCES `cargo_voluntario` (`id`);

--
-- Limitadores para a tabela `voluntario`
--
ALTER TABLE `voluntario`
  ADD CONSTRAINT `voluntario_ibfk_1` FOREIGN KEY (`id_cargo_voluntario`) REFERENCES `cargo_voluntario` (`id`),
  ADD CONSTRAINT `voluntario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
