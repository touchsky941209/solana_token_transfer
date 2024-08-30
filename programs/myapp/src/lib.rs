use anchor_lang::prelude::*;

declare_id!("9ZYjYpXLYgD6EDWzDSUaugddxo1eYPwXbGMWkNmWo54a");

#[program]
pub mod myapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
