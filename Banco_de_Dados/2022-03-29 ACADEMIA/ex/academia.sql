--
-- Banco de Dados: `academia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE IF NOT EXISTS `aluno` (
  `codigo` int NOT NULL,
  `nome` varchar(25) NOT NULL,
  `endereco` text NOT NULL,
  `telefone` varchar(10) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `datamatricula` date NOT NULL,
  `datanascimento` date NOT NULL,
  `altura` float NOT NULL,
  `peso` float NOT NULL,
  PRIMARY KEY (`codigo`)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `instrutor`
--

CREATE TABLE IF NOT EXISTS `instrutor` (
  `codigo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `datanascimento` date NOT NULL,
  `titulacao` varchar(20) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo`)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `modalidade`
--

CREATE TABLE IF NOT EXISTS `modalidade` (
  `codigo` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo`)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE IF NOT EXISTS `turma` (
  `codigo` int NOT NULL,
  `horario` time NOT NULL,
  `duracao` int NOT NULL,
  `datainicio` date NOT NULL,
  `datafim` date NOT NULL,
  `sala` varchar(20) NOT NULL,
  `codinstrutor` int NOT NULL,
  `codmodalidade` int NOT NULL,
  `codaluno` int NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `codinstrutor` (`codinstrutor`),
  KEY `codmodalidade` (`codmodalidade`),
  KEY `codaluno` (`codaluno`)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `codigo` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo`)
);

