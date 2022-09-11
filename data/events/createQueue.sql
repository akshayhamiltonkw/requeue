INSERT INTO [dbo].[queue]
    (
        [Chairs],
        [Note],
        [ClientId],
        [TablePosition],
        [TagId],
        [SubTagId]
    )
VALUES 
    (
       @Chairs,
       @Note,
       @ClientId,
       @TablePosition,
       @TagId,
       @SubTagId
    )

SELECT SCOPE_IDENTITY() AS ClientId 

