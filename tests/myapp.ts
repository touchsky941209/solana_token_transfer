import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Myapp } from "../target/types/myapp";

describe("myapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Myapp as Program<Myapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);


    console.log("This is test transaction");
    console.log("This is test transaction");

    console.log("This is test transaction");    
  });
});
