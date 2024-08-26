import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaTokenTransfer } from "../target/types/solana_token_transfer";

describe("solana_token_transfer", () => {
  // Configure the client to use the local cluster.
  // Configure the client to use the local cluster.
  
  anchor.setProvider(anchor.AnchorProvider.env());
  

  const program = anchor.workspace.SolanaTokenTransfer as Program<SolanaTokenTransfer>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
