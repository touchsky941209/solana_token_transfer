use anchor_lang::prelude::*;

declare_id!("FgzRLHDfd36md7g5jm8igzAkyfVdC7MXTEJpU7xTLW3K");

#[program]
pub mod solana_token_transfer {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
