UPDATE [dbo].[queue]
SET [Chairs]=@Chairs,
    [Note]=@Note,
    [TablePosition]=@TablePosition,
    [TagId]=@TagId,
    [SubTagId]=@SubTagId
WHERE [ClientId]=@ClientId

SELECT [ClientId],
      [Chairs],
      [Note],
      [TablePosition],
      [TagId],
      [SubTagId]
      
  FROM [dbo].[queue]
  WHERE [ClientId]=@ClientId