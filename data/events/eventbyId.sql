SELECT [ClientId],
    [Chairs],
    [Note],
    [TablePosition],
    [TagId],
    [SubTagId]
    
FROM [dbo].[queue]
WHERE [ClientId]=@ClientId
