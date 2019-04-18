<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use App\Entity\Pokemon;

class PokemonController
{
    private $normalizer;

    public function __construct(NormalizerInterface $normalizer) {
        $this->normalizer = $normalizer;
    }

    /**
     * @Route("/api/pokemon", methods={"GET"})
     */
    public function get(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setId(1);
        $pokemon->setName("bulbasaur");
        $pokemon->setWeight(67);

        $response = $this->normalizer->normalize($pokemon, 'json');

        return new JsonResponse($response);
    }

    /**
     * @Route("/api/pokemon", methods={"POST"})
     */
    public function create(): Response
    {
        return new Response("Hello World");
    }
}