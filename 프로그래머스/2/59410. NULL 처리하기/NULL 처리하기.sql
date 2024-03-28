select ANIMAL_TYPE, IFNULL(name,'No name'), SEX_UPON_INTAKE
from ANIMAL_INS
order by ANIMAL_ID asc