from funcionario import Funcionario

carlos=Funcionario('Carlos', 2500.00)
print(carlos.get_salario())
carlos.aum_salario(30)
print(carlos.get_salario())