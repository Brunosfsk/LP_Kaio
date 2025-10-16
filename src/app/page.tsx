"use client";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image src="/logo_Kaio.png" alt="Logo" width={100} height={100} />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-8 w-[1200px]">
        <section className="flex gap-[32px] items-center sm:items-start md:items-center p-8 h-[550px]">
          {" "}
          <div className="w-1/2 flex h-full flex-col justify-center align-center">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-4xl font-bold">TRANSFORME</h1>
                <h1 className="text-4xl font-bold">SEU CORPO EM</h1>
                <h1 className="text-4xl font-bold">12 SEMANAS</h1>
              </div>
              <div>
                <p className="text-2xl">Sem Dietas Malucas e Sem</p>
                <p className="text-2xl">Academia Lotada</p>
              </div>
              <p>
                Consultoria criada por Kaio Dias (CREF 013213-G/ES), com suporte
                de nutricionistas clínicos e esportivos e resultados comprovados
                em +150 alunos transformados.
              </p>
              <Button onClick={() => console.log("Clicou")}>
                Quero começar minha transformação
              </Button>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/Persona_1.png"
              alt="Foto"
              width={500}
              height={500}
              className="relative top-[-60px]"
            />
          </div>
        </section>
        <section className="flex gap-[32px] items-center sm:items-start w-full h-[540px] p-8 pb-20">
          <div className="w-1/2">
            <div className="w-[340px] h-[475px] bg-gray-400"></div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start h-full">
            <p className="text-2xl">Método Aprovado por</p>
            <p className="text-2xl">Especialistas em</p>
            <p className="text-2xl">Nutrição e Treinamento</p>
          </div>
        </section>
        <section className="flex flex-col items-center w-full p-8">
          <h1 className="text-4xl font-bold text-center mb-12">
            ESSE É KAIO DIAS
          </h1>

          <div
            className="relative w-[852px] h-[485px] rounded-[30px]"
            style={{
              background:
                "linear-gradient(237.18deg, #ED3E03 30.4%, #000000 87.29%)",
            }}
          >
            {/* Imagem: mais à esquerda e mais para cima */}
            <div className="absolute left-[-120] top-[-120px] z-10">
              <Image
                src="/Persona_2_.png"
                alt="Kaio Dias"
                width={550}
                height={550}
                className="rounded-xl"
              />
            </div>

            {/* Texto: ajustado para não colidir com a imagem */}
            <div className="absolute left-[500px] top-[50px] max-w-[320px] text-left">
              <p className="text-white text-xl leading-relaxed">
                Personal Trainer com 7 anos de experiência ajudando pessoas
                comuns a emagrecer de forma saudável e definitiva. Parceiro de
                uma equipe de 4 nutricionistas e apoiado por blogueiros fitness
                locais. Minha missão é mostrar que é possível transformar seu
                corpo sem métodos radicais e com suporte próximo em cada etapa.
              </p>
              <p className="text-white text-xl font-medium mt-6">
                CREF 013213-G/ES • Vitória-ES
              </p>
            </div>
          </div>
        </section>
        {/* Faixa inclinada com gradiente - full bleed */}
        <div className="full-bleed">
          <Image
            src="/FITA.png"
            alt="Kaio Dias"
            width={1900}
            height={550}
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
        <section className="flex w-full p-8 h-[650px]">
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-5xl font-bold leading-tight mb-12">
              VOCÊ JÁ SE SENTIU ASSIM?
            </h2>
            <div className="mt-24">
              <p className="text-orange-500 text-3xl font-bold tracking-wide">
                A SOLUÇÃO
              </p>
              <p className="text-orange-500 text-3xl font-bold tracking-wide">
                MÉTODO
              </p>
              <p className="text-orange-500 text-3xl font-bold tracking-wide">
                EXCLUSIVO
              </p>
              <p className="text-orange-500 text-3xl font-bold tracking-wide">
                KAIO DIAS
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <ul className="space-y-6 text-xl">
              <li className="flex">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3"></span>
                <p>Falta de tempo para treinar entre trabalho e família.</p>
              </li>
              <li className="flex">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3"></span>
                <p>Tentou dietas da moda e voltou ao peso inicial.</p>
              </li>
              <li className="flex">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3"></span>
                <p>Cansaço com treinos genéricos que não funcionam.</p>
              </li>
              <li className="flex">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3"></span>
                <p>Perdendo a motivação facilmente sem acompanhamento.</p>
              </li>
            </ul>
            <div className="mt-12">
              <h3 className="text-white text-4xl font-bold">Treino 100%</h3>
              <p className="text-gray-300 text-xl">
                personalizado para seu objetivo e rotina
              </p>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-orange-600 to-gray-700"></div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>01</span>
                <span>05</span>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center w-full">
          <Button onClick={() => console.log("Clicou")}>
            Quero começar minha transformação
          </Button>
        </div>
        <section className="flex gap-[32px] items-center w-full h-[650px] p-8">
          {/* Lado esquerdo: imagem com fundo em gradiente e cantos arredondados */}
          <div className="relative w-1/2 h-full flex items-center justify-center">
            <div
              className="w-[520px] h-[360px] rounded-[30px]"
              style={{
                background: "linear-gradient(236deg, #ED3E03 20%, #000000 90%)",
              }}
            ></div>
            <Image
              src="/Mulher.png"
              alt="Aluna treinando"
              width={500}
              height={500}
              className="absolute left-0 top-[40px]"
            />
          </div>

          {/* Lado direito: título e bullets de benefícios */}
          <div className="w-1/2 h-full flex flex-col justify-center">
            <h2 className="text-white text-5xl font-bold leading-tight mb-8">
              BENEFÍCIOS E
              <br />
              RESULTADOS ESPERADOS
            </h2>

            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-12 h-12 bg-white text-white p-2 rounded-full">
                  <Image
                    src="/icon_1.png"
                    alt="Aluna treinando"
                    width={38}
                    height={38}
                  />
                </span>
                <div>
                  <p className="text-white font-semibold">Treinos de 30 min</p>
                  <p className="text-gray-300 text-sm">
                    ideais para quem tem pouco tempo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-12 h-12 bg-white text-white p-2 rounded-full">
                  <Image
                    src="/icon_2.png"
                    alt="Aluna treinando"
                    width={38}
                    height={38}
                  />
                </span>
                <div>
                  <p className="text-white font-semibold">
                    Resultados perceptíveis
                  </p>
                  <p className="text-gray-300 text-sm">em poucas semanas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-12 h-12 bg-white text-white p-2 rounded-full">
                  <Image
                    src="/icon_3.png"
                    alt="Aluna treinando"
                    width={38}
                    height={38}
                  />
                </span>
                <div>
                  <p className="text-white font-semibold">Motivação contínua</p>
                  <p className="text-gray-300 text-sm">para não desistir.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-12 h-12 bg-white text-white p-2 rounded-full">
                  <Image
                    src="/icon_4.png"
                    alt="Aluna treinando"
                    width={38}
                    height={38}
                  />
                </span>
                <div>
                  <p className="text-white font-semibold">Economia</p>
                  <p className="text-gray-300 text-sm">
                    use o que tem em casa ou na academia local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Depoimentos: Mais de 150 alunos satisfeitos */}
        <section className="w-[1200px] ml-[-33px]">
          <div
            className="w-full rounded-[30px] p-12"
            style={{
              background: "linear-gradient(236deg, #FF3F00 0%, #ED3E03 100%)",
            }}
          >
            <h2 className="text-white text-4xl font-bold mb-12">
              MAIS DE 150 ALUNOS
              <br />
              SATISFEITOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div>
                <div className="flex items-center gap-6">
                  <Image
                    src="/Mulher.png"
                    alt="Aluna"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white text-3xl font-semibold">Luana</p>
                    <p className="text-white text-3xl font-semibold">Lins</p>
                  </div>
                </div>
                <p className="text-white/90 mt-6 max-w-[360px]">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam&rdquo;
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <div className="flex items-center gap-6">
                  <Image
                    src="/Mulher.png"
                    alt="Aluna"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white text-3xl font-semibold">Luana</p>
                    <p className="text-white text-3xl font-semibold">Lins</p>
                  </div>
                </div>
                <p className="text-white/90 mt-6 max-w-[360px]">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam&rdquo;
                </p>
              </div>

              {/* Card 3 */}
              <div>
                <div className="flex items-center gap-6">
                  <Image
                    src="/Mulher.png"
                    alt="Aluna"
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white text-3xl font-semibold">Luana</p>
                    <p className="text-white text-3xl font-semibold">Lins</p>
                  </div>
                </div>
                <p className="text-white/90 mt-6 max-w-[360px]">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Na sua inscrição, você recebe */}
        <section className="w-full p-8">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-white text-5xl font-bold text-center mb-12">
              NA SUA INSCRIÇÃO,
              <br />
              VOCÊ RECEBE:
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1100px] mb-16">
              {[
                {
                  title: "avaliação +\n anamnese\n individualizada",
                  icon: "/icon_A.png",
                },
                {
                  title: "Plano de treino\n atualizado\n mensalmente",
                  icon: "/icon_B.png",
                },
                {
                  title: "Suporte\n direto via\n WhatsApp",
                  icon: "/icon_C.png",
                },
                {
                  title: "Checklist de\n hábitos\n saudáveis",
                  icon: "/icon_D.png",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[24px] p-6 text-center w-[266px] h-[329px] overflow-hidden mx-auto"
                  style={{
                    background:
                      "linear-gradient(236deg, #FF3F00 0%, #ED3E03 100%)",
                    boxShadow: "0 0 35px rgba(237,62,3,0.45)",
                  }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Image
                      src={item.icon}
                      alt={`Ícone ${idx + 1}`}
                      width={220}
                      height={220}
                      className="relative top-[-30px]"
                    />
                  </div>
                  <p className="text-white text-xl leading-[1.3] whitespace-pre-line font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Preço */}
            <div className="flex w-full justify-center items-center max-w-[1100px] text-center mx-auto">
              <div className="w-full flex flex-col justify-center items-end p-4">
                <p className="text-white text-5xl font-bold">TUDO ISSO</p>
                <p className="text-white text-5xl font-bold">POR APENAS:</p>
              </div>

              <div className="flex flex-col items-end justify-start gap-4 mt-6">
                <span className="text-orange-500 text-[96px] leading-none font-bold">
                  <span className="text-orange-500 text-4xl font-bold">R$</span>
                  120,00
                </span>
                <div className="flex justify-end items-center h-[20px] w-[420px] bg-orange-600 rounded-full mx-auto p-3">
                  mensal
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="full-bleed">
          <Image
            src="/FITA.png"
            alt="Kaio Dias"
            width={1900}
            height={550}
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
        {/* Bônus exclusivo */}
        <section className="flex gap-[32px] items-center w-full p-8 h-[650px]">
          {/* Lado esquerdo: livro estilizado com brilho */}
          <div className="relative w-1/2 h-full flex items-center justify-center">
            <div className="absolute w-[520px] h-[520px] rounded-full bg-orange-600 opacity-20 blur-[120px]"></div>
            <div className="w-[520px] h-[360px] bg-orange-600 rounded-[8px] shadow-[0_40px_80px_rgba(237,62,3,0.35)]"></div>
          </div>

          {/* Lado direito: textos e CTAs */}
          <div className="w-1/2 h-full flex flex-col justify-center">
            <h2 className="text-white text-5xl font-bold leading-tight mb-4">
              BÔNUS
              <br />
              EXCLUSIVO
            </h2>
            <p className="text-gray-300 text-lg max-w-[520px] mb-8">
              E-book com 20 Receitas Fitness + Sessão de ajuste de treino
              gratuita
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                Acesse o grupo VIP de motivação
              </button>
              <span className="text-white text-6xl font-extrabold">OU</span>
              <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                Receba seu E-book
              </button>
            </div>
          </div>
        </section>
        {/* Dúvidas Frequentes */}
        <section className="w-full p-8">
          <div className="w-full max-w-[1100px] mx-auto rounded-[24px] border border-orange-600 p-10">
            <div className="flex items-center mb-8">
              <div>
                <h2 className="text-white text-5xl font-bold">DÚVIDAS</h2>
                <h2 className="text-white text-5xl font-bold">FREQUENTES</h2>
              </div>
              <div className="flex-1 ml-6 h-[4px] bg-gradient-to-r from-orange-600 to-transparent"></div>
            </div>

            <div className="space-y-6">
              {[
                "E se eu tiver pouco tempo? Treinos de 30min cabem na sua rotina.",
                "Preciso de academia? Não! Posso montar treinos com o que você tem em casa.",
                "E se eu não gostar do treino? Ajusto até encontrar o formato ideal para você.",
                "Quando verei resultados? Em poucas semanas você já sentirá diferença",
              ].map((q, idx) => (
                <div
                  key={idx}
                  className="rounded-[12px] px-6 py-4 text-white font-medium"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "linear-gradient(90deg, #FF3F00 0%, rgba(255,63,0,0.25) 100%)"
                        : "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,63,0,0.25) 100%)",
                    border: "1px solid rgba(237,62,3,0.35)",
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Final: Vagas Limitadas */}
        <section className="w-full p-8">
          <div
            className="relative w-full rounded-[30px] p-12 overflow-hidden"
            style={{
              background:
                "radial-gradient(1000px 600px at 100% 0%, rgba(237,62,3,0.45) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%)",
            }}
          >
            <div className="flex items-center gap-8">
              {/* Texto à esquerda */}
              <div className="w-1/2">
                <h2 className="text-orange-500 text-5xl font-extrabold leading-tight mb-6">
                  AS VAGAS SÃO
                  <br />
                  LIMITADAS!
                </h2>
                <p className="text-gray-300 text-lg max-w-[520px]">
                  Para manter meu acompanhamento próximo. Garanta sua vaga agora
                  e comece sua transformação ainda esta semana!
                </p>

                <div className="mt-10">
                  <Button>Quero começar minha transformação</Button>
                </div>
              </div>

              {/* Imagem à direita */}
              <div className="w-1/2 relative h-[420px] flex items-center justify-center">
                <div className="absolute w-[520px] h-[520px] rounded-full bg-orange-600 opacity-20 blur-[120px]"></div>
                <Image
                  src="/Persona_1.png"
                  alt="Kaio Dias"
                  width={420}
                  height={420}
                  className="relative"
                />
              </div>
            </div>

            <div className="mt-12 w-full h-[8px] bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-40"></div>

            {/* Créditos e social */}
            <div className="flex items-center justify-between mt-6 text-gray-300">
              <p>KAIO DIAS CREF 013213-G/ES • Vitória-ES</p>
              <p>
                Siga-me:{" "}
                <span className="text-orange-500 font-semibold">Instagram</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
