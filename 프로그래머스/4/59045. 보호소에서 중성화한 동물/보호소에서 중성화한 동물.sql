-- 코드를 입력하세요
SELECT i.ANIMAL_ID, i.ANIMAL_TYPE, i.NAME
FROM ANIMAL_INS as i join ANIMAL_OUTS as o on i.ANIMAL_ID = o.ANIMAL_ID
where SEX_UPON_INTAKE like '%Intact%' && 
    (SEX_UPON_OUTCOME like '%Neutered%' || SEX_UPON_OUTCOME like '%Spayed%')
    