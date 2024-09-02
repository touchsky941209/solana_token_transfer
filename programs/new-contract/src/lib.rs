use anchor_lang::prelude::*;

declare_id!("AiGbCagvc38sisassbpG7SJjfgSDrU7Q8JP3G8TYTgfU");

#[program]
pub mod new_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
