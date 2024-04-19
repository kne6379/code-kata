-- 코드를 입력하세요
SELECT u.user_id, u.NICKNAME, sum(price) as TOTAL_SALES
FROM USED_GOODS_USER as u join USED_GOODS_BOARD as b on u.USER_ID = b.WRITER_ID
WHERE b.STATUS = "DONE"
group by user_id
HAVING sum(price) >= 700000
order by 3