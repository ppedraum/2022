-- Banco de Dados: `portal`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `codcategoria` int(5) NOT NULL,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`codcategoria`)
);
-- --------------------------------------------------------

--
-- Estrutura da tabela `colunistas`
--

CREATE TABLE IF NOT EXISTS `colunistas` (
  `codcolunista` int(5) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`codcolunista`)
);
-- --------------------------------------------------------

--
-- Estrutura da tabela `materias`
--

CREATE TABLE IF NOT EXISTS `materias` (
  `codmateria` int(5) NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `codcategoria` int(5) NOT NULL,
  `codcolunista` int(5) NOT NULL,
  `chamada` varchar(100) NOT NULL,
  `resumo` text NOT NULL,
  `materiacompleta` text NOT NULL,
  `fotochamada` varchar(100) NOT NULL,
  `foto1` varchar(100) NOT NULL,
  `foto2` varchar(100) NOT NULL,
  PRIMARY KEY (`codmateria`),
  KEY `codcategoria` (`codcategoria`),
  KEY `codcolunista` (`codcolunista`)
) ;


--
-- Restrições para a tabela `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`codcategoria`) REFERENCES `categorias` (`codcategoria`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `materias_ibfk_2` FOREIGN KEY (`codcolunista`) REFERENCES `colunistas` (`codcolunista`) ON DELETE RESTRICT ON UPDATE RESTRICT;

