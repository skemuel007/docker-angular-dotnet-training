FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["MoviesAPI/MoviesAPI.csproj", "MoviesAPI/"]
COPY ["MoviesShared/MoviesShared.csproj", "MoviesShared/"]
RUN dotnet restore "MoviesAPI/MoviesAPI.csproj"
COPY . .
WORKDIR "/src/MoviesAPI"
RUN dotnet build "MoviesAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MoviesAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MoviesAPI.dll"]
