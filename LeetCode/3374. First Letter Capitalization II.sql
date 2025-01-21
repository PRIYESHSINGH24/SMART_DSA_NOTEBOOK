WITH RECURSIVE
 a(i,t,l) AS (SELECT content_id,content_text,LENGTH(content_text) FROM user_content)
,b(i,r,c,l,t) AS (
    SELECT i,1,SUBSTRING(t,1,1),l,t FROM a
    UNION ALL
    SELECT i,r+1,SUBSTRING(t,r+1,1),l,t FROM b WHERE r+1<=l
)
,u(i,r,n) AS (
    SELECT b.i,b.r,(CASE WHEN COALESCE(w.c,' ') IN (' ', '-') THEN UPPER(b.c) ELSE LOWER(b.c) END)
    FROM b LEFT JOIN b w ON b.i=w.i AND b.r=w.r+1
)
,s(i,n,r) AS (
    SELECT i,CAST('' AS CHAR(8000)),0
    FROM u WHERE r=1
    UNION ALL
    SELECT u.i,CONCAT(s.n,u.n),u.r
    FROM u INNER JOIN s ON u.i=s.i AND u.r=s.r+1
)
SELECT a.i AS content_id,a.t AS original_text,s.n AS converted_text
FROM a INNER JOIN s ON s.i=a.i AND s.r=a.l
ORDER BY 1
